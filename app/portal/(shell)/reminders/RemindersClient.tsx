"use client";

import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import { ReminderStatusBadge } from "@/components/ui/StatusBadge";
import { reminders as seedReminders, reminderStatus } from "@/lib/demo-data";
import { Reminder, ReminderStatus, UserName } from "@/lib/types";

let nextId = 100;

const STATUS_ORDER: ReminderStatus[] = ["Due", "Upcoming", "Scheduled", "Completed"];

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function RemindersClient({ currentUser }: { currentUser: UserName }) {
  const [items, setItems] = useState<Reminder[]>(seedReminders);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");

  function resetForm() {
    setTitle("");
    setDueDate("");
    setNotes("");
    setShowForm(false);
  }

  function handleAdd() {
    if (!title.trim() || !dueDate) return;
    const newReminder: Reminder = {
      id: `rem-${nextId++}`,
      title: title.trim(),
      dueDate,
      notes: notes.trim() || undefined,
      completed: false,
      createdBy: currentUser,
    };
    setItems((prev) => [newReminder, ...prev]);
    resetForm();
  }

  function toggleComplete(id: string) {
    setItems((prev) =>
      prev.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r))
    );
  }

  const grouped = useMemo(() => {
    const withStatus = items.map((r) => ({ reminder: r, status: reminderStatus(r) }));
    return STATUS_ORDER.map((status) => ({
      status,
      items: withStatus
        .filter((x) => x.status === status)
        .sort((a, b) => a.reminder.dueDate.localeCompare(b.reminder.dueDate)),
    })).filter((g) => g.items.length > 0);
  }, [items]);

  const dueCount = items.filter((r) => !r.completed && reminderStatus(r) === "Due").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl text-navy font-semibold">Reminders</h1>
          {dueCount > 0 && (
            <p className="text-danger text-[13.5px] font-semibold mt-1">
              {dueCount} reminder{dueCount > 1 ? "s" : ""} past due
            </p>
          )}
        </div>
        <Button onClick={() => setShowForm((v) => !v)}>{showForm ? "Cancel" : "Add Reminder"}</Button>
      </div>

      {showForm && (
        <div className="bg-white border border-border rounded-md p-5 mb-6 shadow-card">
          <div className="grid grid-cols-[2fr_1fr] gap-4 mb-4 max-[700px]:grid-cols-1">
            <div>
              <label className="block font-semibold text-[14px] mb-1.5">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Follow up with client on freight cost"
                className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[14px] mb-1.5">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]"
              />
            </div>
          </div>
          <label className="block font-semibold text-[14px] mb-1.5">Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px] mb-4"
          />
          <p className="text-[12.5px] text-ink-faint mb-4">
            Reminders become visible on the Dashboard starting 7 days before
            the due date, and stay flagged as "Due" after the date passes
            until marked complete.
          </p>
          <div className="flex gap-2.5">
            <Button onClick={handleAdd}>Save Reminder</Button>
            <Button variant="secondary" onClick={resetForm}>Cancel</Button>
          </div>
        </div>
      )}

      {grouped.map((group) => (
        <div key={group.status} className="mb-7">
          <div className="flex items-center gap-2.5 mb-3">
            <ReminderStatusBadge status={group.status} />
            <span className="text-[13px] text-ink-faint">{group.items.length}</span>
          </div>
          {group.items.map(({ reminder }) => (
            <div
              key={reminder.id}
              className={`bg-white border border-border rounded-md p-5 mb-2.5 flex items-start justify-between gap-4 ${
                reminder.completed ? "opacity-60" : ""
              }`}
            >
              <div>
                <h3 className={`text-[15px] font-semibold mb-1 ${reminder.completed ? "text-ink-muted line-through" : "text-navy"}`}>
                  {reminder.title}
                </h3>
                {reminder.notes && <p className="text-[13.5px] text-ink-muted mb-2">{reminder.notes}</p>}
                <div className="flex gap-3 items-center text-xs text-ink-faint">
                  <span>Due {formatDate(reminder.dueDate)}</span>
                  {reminder.relatedLabel && (
                    <span className="bg-border-soft text-ink-muted font-semibold px-2 py-1 rounded">{reminder.relatedLabel}</span>
                  )}
                  <span>Added by {reminder.createdBy}</span>
                </div>
              </div>
              <Button
                variant={reminder.completed ? "secondary" : "primary"}
                onClick={() => toggleComplete(reminder.id)}
                className="whitespace-nowrap flex-shrink-0"
              >
                {reminder.completed ? "Mark Incomplete" : "Mark Complete"}
              </Button>
            </div>
          ))}
        </div>
      ))}

      {items.length === 0 && (
        <p className="text-[14px] text-ink-muted py-6 text-center">No reminders yet — add one above.</p>
      )}
    </div>
  );
}

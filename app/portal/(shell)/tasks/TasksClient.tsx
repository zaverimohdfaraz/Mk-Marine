"use client";

import { useState } from "react";
import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { PriorityTag } from "@/components/ui/StatusBadge";
import { Bell, Check } from "lucide-react";
import { Task, UserName, Priority } from "@/lib/types";

export default function TasksClient({
  initialTasks,
  currentUser,
}: {
  initialTasks: Task[];
  currentUser: UserName;
}) {
  const [tasks, setTasks] = useState(initialTasks);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState<UserName>(currentUser);
  const [dueLabel, setDueLabel] = useState("");
  const [priority, setPriority] = useState<Priority>("Normal");
  const [reminder, setReminder] = useState(false);

  function toggleComplete(id: string) {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: t.status === "Completed" ? "Pending" : "Completed" } : t
      )
    );
  }

  function handleAdd() {
    if (!title.trim() || !dueLabel.trim()) return;
    const task: Task = {
      id: `t-${Date.now()}`,
      title: title.trim(),
      assignedTo,
      dueLabel: dueLabel.trim(),
      reminder,
      priority,
      status: "Pending",
    };
    setTasks([task, ...tasks]);
    setTitle("");
    setDueLabel("");
    setPriority("Normal");
    setReminder(false);
    setAdding(false);
  }

  const pending = tasks.filter((t) => t.status !== "Completed");
  const completed = tasks.filter((t) => t.status === "Completed");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl text-navy font-semibold">Tasks</h1>
        <Button onClick={() => setAdding(true)}>Add Task</Button>
      </div>

      {adding && (
        <Panel title="New Task">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-2">
              <label className="block font-semibold text-[13px] mb-1.5">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]" />
            </div>
            <div>
              <label className="block font-semibold text-[13px] mb-1.5">Assign To</label>
              <select value={assignedTo} onChange={(e) => setAssignedTo(e.target.value as UserName)} className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]">
                <option>Mr. Kersi</option>
                <option>Mr. Patel</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-[13px] mb-1.5">Due</label>
              <input value={dueLabel} onChange={(e) => setDueLabel(e.target.value)} placeholder="e.g. Tomorrow, Friday" className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]" />
            </div>
            <div>
              <label className="block font-semibold text-[13px] mb-1.5">Priority</label>
              <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)} className="w-full px-3 py-2.5 border-[1.5px] border-border rounded-sm text-[14px]">
                <option>Normal</option>
                <option>Important</option>
                <option>Urgent</option>
              </select>
            </div>
            <label className="flex items-center gap-2 text-[14px] font-medium mt-1">
              <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
              Set a follow-up reminder
            </label>
          </div>
          <div className="flex gap-2.5">
            <Button onClick={handleAdd}>Save Task</Button>
            <Button variant="ghost" onClick={() => setAdding(false)}>Cancel</Button>
          </div>
        </Panel>
      )}

      <Panel title={`Pending (${pending.length})`}>
        {pending.length === 0 && <p className="text-[14px] text-ink-muted py-2">Nothing pending — nice work.</p>}
        {pending.map((t) => (
          <div key={t.id} className="flex justify-between items-center py-3 border-b border-border-soft last:border-b-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleComplete(t.id)}
                className="w-5 h-5 rounded border-[1.5px] border-border flex items-center justify-center flex-shrink-0"
                aria-label="Mark complete"
              />
              <div>
                <div className="font-semibold text-navy text-[14.5px]">{t.title}</div>
                <div className="text-xs text-ink-faint flex items-center gap-1.5">
                  Assigned to {t.assignedTo} · Due {t.dueLabel}
                  {t.reminder && <Bell size={12} className="text-gold" />}
                  {t.relatedLabel && <span>· {t.relatedLabel}</span>}
                </div>
              </div>
            </div>
            <PriorityTag priority={t.priority} />
          </div>
        ))}
      </Panel>

      <Panel title={`Completed (${completed.length})`}>
        {completed.length === 0 && <p className="text-[14px] text-ink-muted py-2">No completed tasks yet.</p>}
        {completed.map((t) => (
          <div key={t.id} className="flex justify-between items-center py-3 border-b border-border-soft last:border-b-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleComplete(t.id)}
                className="w-5 h-5 rounded bg-success border-[1.5px] border-success flex items-center justify-center flex-shrink-0"
                aria-label="Mark incomplete"
              >
                <Check size={13} className="text-white" />
              </button>
              <div className="font-semibold text-ink-muted text-[14.5px] line-through">{t.title}</div>
            </div>
          </div>
        ))}
      </Panel>
    </div>
  );
}

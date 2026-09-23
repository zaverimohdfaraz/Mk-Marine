import { Panel } from "@/components/ui/Panel";
import { tasks } from "@/lib/demo-data";

export default function TasksPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-6">Tasks</h1>
      <Panel title="My Work">
        {tasks.map((t) => (
          <div key={t.id} className="flex justify-between items-center py-3 border-b border-border-soft last:border-b-0">
            <div>
              <div className="font-semibold text-navy text-[14.5px]">{t.title}</div>
              <div className="text-xs text-ink-faint">Assigned to {t.assignedTo} · Due {t.dueLabel}</div>
            </div>
            <span className="text-[12.5px] font-semibold text-ink-muted">{t.status}</span>
          </div>
        ))}
      </Panel>
    </div>
  );
}

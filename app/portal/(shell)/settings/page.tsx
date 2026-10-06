import { Panel } from "@/components/ui/Panel";
import Button from "@/components/ui/Button";
import { auditLog } from "@/lib/demo-data";

const USERS = [
  { name: "Mr. Kersi", email: "kersi@mkmarineservices.example", role: "Administrator", status: "Active" },
  { name: "Mr. Patel", email: "patel@mkmarineservices.example", role: "Staff", status: "Active" },
];

const PERMISSIONS = ["View", "Create", "Edit", "Delete", "Export", "Manage Users", "Manage Settings"];
const ROLES = ["Administrator", "Staff", "Accountant / Auditor"];

const GRANTED: Record<string, string[]> = {
  Administrator: ["View", "Create", "Edit", "Delete", "Export", "Manage Users", "Manage Settings"],
  Staff: ["View", "Create", "Edit", "Export"],
  "Accountant / Auditor": ["View", "Export"],
};

export default function SettingsPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-navy font-semibold mb-6">Settings</h1>

      <Panel title="Users" action="Add User">
        <table className="w-full border-collapse text-[14.5px]">
          <thead>
            <tr>
              {["Name", "Email", "Role", "Status", ""].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr key={u.email}>
                <td className="py-3.5 px-2 border-b border-border-soft font-semibold text-navy">{u.name}</td>
                <td className="py-3.5 px-2 border-b border-border-soft text-ink-muted">{u.email}</td>
                <td className="py-3.5 px-2 border-b border-border-soft">{u.role}</td>
                <td className="py-3.5 px-2 border-b border-border-soft">
                  <span className="bg-success-bg text-success text-[12.5px] font-semibold px-2.5 py-1 rounded-full">{u.status}</span>
                </td>
                <td className="py-3.5 px-2 border-b border-border-soft text-right">
                  <button className="text-ocean text-[13.5px] font-semibold">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[12.5px] text-ink-faint mt-3">
          User management is CRUD-ready so more people can be added later, per the spec.
        </p>
      </Panel>

      <Panel title="Roles & Permissions">
        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr>
              <th className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">Permission</th>
              {ROLES.map((r) => (
                <th key={r} className="text-center text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{r}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERMISSIONS.map((perm) => (
              <tr key={perm}>
                <td className="py-3 px-2 border-b border-border-soft font-medium text-navy">{perm}</td>
                {ROLES.map((role) => (
                  <td key={role} className="py-3 px-2 border-b border-border-soft text-center">
                    {GRANTED[role].includes(perm) ? (
                      <span className="text-success font-bold">✓</span>
                    ) : (
                      <span className="text-ink-faint">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      <Panel title="Company Information">
        <div className="grid grid-cols-2 gap-5 max-w-2xl">
          <div>
            <label className="block font-semibold text-[14px] mb-1.5">Company Name</label>
            <input defaultValue="MK Marine Services India LLP" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]" />
          </div>
          <div>
            <label className="block font-semibold text-[14px] mb-1.5">Registered Office</label>
            <input defaultValue="Mumbai, India" className="w-full px-3.5 py-3 border-[1.5px] border-border rounded-sm text-[15px]" />
          </div>
        </div>
        <div className="mt-5">
          <Button>Save Changes</Button>
        </div>
      </Panel>

      <Panel title="Audit Log">
        <table className="w-full border-collapse text-[13.5px]">
          <thead>
            <tr>
              {["When", "User", "Action", "Record", "Detail"].map((h) => (
                <th key={h} className="text-left text-xs uppercase tracking-wide text-ink-faint font-bold border-b-[1.5px] border-border py-2.5 px-2">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {auditLog.map((a) => (
              <tr key={a.id}>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted whitespace-nowrap">{a.timestamp}</td>
                <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy whitespace-nowrap">{a.user}</td>
                <td className="py-3 px-2 border-b border-border-soft whitespace-nowrap">
                  <span className="bg-border-soft text-ink-muted text-[12px] font-semibold px-2.5 py-1 rounded">{a.action}</span>
                </td>
                <td className="py-3 px-2 border-b border-border-soft font-semibold text-navy whitespace-nowrap">{a.entityLabel}</td>
                <td className="py-3 px-2 border-b border-border-soft text-ink-muted">{a.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-[12.5px] text-ink-faint mt-3">
          Every create, edit, note, payment and status change will be logged here
          automatically once the backend is connected in Phase 3 — this is sample
          data showing the intended format (who, what, when, and the before/after
          detail).
        </p>
      </Panel>
    </div>
  );
}

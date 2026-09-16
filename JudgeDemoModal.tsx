import { useState } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  UserCheck,
  UserPlus,
  Search,
  FolderOpen,
  FilePlus2,
  History,
  ShieldAlert,
} from 'lucide-react';
import { Patient } from '../../../types';

interface JudgeDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToStep: (stepNumber: number) => void;
  patients: Patient[];
}

export default function JudgeDemoModal({
  isOpen,
  onClose,
  onNavigateToStep,
  patients,
}: JudgeDemoModalProps) {
  if (!isOpen) return null;

  const steps = [
    {
      num: 1,
      title: '1. Role Authentication & Login (FR-01)',
      desc: 'Secure authentication using username & password (doctor/doctor123, staff/staff123, admin/admin123) with logout & session protection.',
      actionLabel: 'Test Login / Header',
      icon: UserCheck,
    },
    {
      num: 2,
      title: '2. Register New Patient (FR-02)',
      desc: 'Fill structured demographic & emergency fields with auto-generated Patient ID and validation.',
      actionLabel: 'Open Registration Form',
      icon: UserPlus,
    },
    {
      num: 3,
      title: '3. Search & Filter Directory (FR-03)',
      desc: 'Instant real-time search by Patient ID, Name, or Mobile number in the patient directory.',
      actionLabel: 'Open Patient Directory',
      icon: Search,
    },
    {
      num: 4,
      title: '4. Open Patient Profile (FR-04)',
      desc: 'Inspect demographics, registered emergency contacts, and active clinical encounters.',
      actionLabel: 'View Sample Patient',
      icon: FolderOpen,
    },
    {
      num: 5,
      title: '5. 7-Section Case Taking (FR-05)',
      desc: 'Record Chief Complaint, Present Illness, Past History, Allergies, Medications, Vitals, and Advice.',
      actionLabel: 'Start Case Taking',
      icon: FilePlus2,
    },
    {
      num: 6,
      title: '6. Review Case History (FR-06)',
      desc: 'Review chronological case timeline and full clinical records with printable summary.',
      actionLabel: 'View Case Archive',
      icon: History,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden border border-slate-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight">
                SIH26047 Official Hackathon Demo Flow
              </h2>
              <p className="text-[11px] text-slate-300">
                Success Criteria: Login → Register → Save → Search → Open → Add Case → Case History
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          <p className="text-xs text-slate-600">
            Click any step below to instantly jump to that requirement for demonstration:
          </p>

          <div className="space-y-2.5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition flex items-center justify-between gap-3 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onNavigateToStep(step.num);
                      onClose();
                    }}
                    className="flex-shrink-0 inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-semibold transition"
                  >
                    <span>{step.actionLabel}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-center justify-between">
            <span className="font-semibold text-slate-700">All data persists in local storage.</span>
            <span className="text-[11px] text-slate-500">Includes 5 pre-loaded clinical patient records</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold transition"
          >
            Close Walkthrough
          </button>
        </div>
      </div>
    </div>
  );
}

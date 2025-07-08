import type React from "react"

export const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-pink-600">{children}</span>
)
export const Variable = ({ children }: { children: React.ReactNode }) => (
  <span className="text-sky-600">{children}</span>
)
export const String = ({ children }: { children: React.ReactNode }) => (
  <span className="text-emerald-700">{children}</span>
)
export const Comment = ({ children }: { children: React.ReactNode }) => (
  <span className="text-slate-500">{children}</span>
)
export const Func = ({ children }: { children: React.ReactNode }) => <span className="text-purple-600">{children}</span>
export const Type = ({ children }: { children: React.ReactNode }) => <span className="text-teal-500">{children}</span>
export const Plain = ({ children }: { children: React.ReactNode }) => (
  <span className="text-foreground">{children}</span>
)

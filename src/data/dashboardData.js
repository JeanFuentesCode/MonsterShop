export const logoSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAB4CAYAAADc36SXAAAQAElEQVR4AexdCfwkRXXu+e8C7i5CIpggGtBIwBNBNqAERQWCyiJEuVwOw6kgRBF2OeRYQHBZICQRuRGBZUFBDjkEUeRUEQERL4xECYIG0IBxwewu237fzNTQ01PVXd3T18z/m1+9qeqqV1Wvvu6uV3dPBPoJASEgBISAEMiBgBRIDtAURQgIASEgBIJACkRPgRCoCwHlKwRGHAEpkBG/gRJfCAgBIVAXAlIgdSGvfIWAEBACI47ACCuQEUde4gsBISAERhwBKZARv4ESXwgIASFQFwJSIHUhr3yFwAgjINGFABGQAiEKIiEgBISAEMiMgBRIZsgUQQgIASEgBIiAFAhRqJqUnxAQAkJgDBCQAhmDm6giCAEhIATqQEAKpA7UlacQEAJ1IaB8C0RACqRAMJWUEBACQmAyISAFMpnutsoqBISAECgQgUYrkAW7LXnrvG3D6QWWt9Ckmi5foYXtJiZLCAgBIWAQaKQCOWX2c7ucsuviZ1vBsvtmrPr84gW7Lr7g1A+Hqxuh67abLl/d+Ch/ISAEJgcCjVMg83d/bq1wIjg3aLVWMbeg1WrttXzi+QcX7BiuYfzqspsuX124KF8hIATKRqB56TdOgUwJgzNaQfDSOFStVrBmsNLzZ8X9q75uunxV46H8hIAQmLwINEqBLJi9ZAPcim1BVgPFsn2Xxxpetmc378bKV3b5lb4QEAJCIIpAoxRIa2LpZ6LCWd2tpSdY/SvwbLp8FUAwyllIdiEgBApGoDEK5OTdF88MgtY2Qcqv1WrN4uqnFLbCg5suX+EFVoJCQAgIgRQEGqNAJsJgXuD7C5ce58taFF/T5SuqnEpHCAgBIeCLgLcC8U0wD19nbiG992HSbvdCOvMlxqtUu+nylVp4JS4EhIAQcCDQCAXiNbcQL0CFcyFNly8Oja6FgBAQAlUgULsCydq6N6BU1QtpunwGD9njjIDKJgSaiUDtCiRX695gWUEvpOnyGShkCwEhIASqRqBWBZK3dW9AKrsX0nT5DA6yhYAQEAJ1IFCrAhmqdd9Fq9ValrZ6q8uZ3Wq6fNlLpBhCQAgIgeIQqE2BnLbLkg2D9H0f1wVBeEOQ9GsF23V6CklM2cOaLl/2EimGEBACQqBYBGpTIMunpu8oD5dPPSZcvsJRqUUuYS6k6fKlYiIGIdAEBCTDWCNQiwLp9BiS932EYXj93EUr/oCU1gspei6k6fKN9ROpwgkBITAyCNSiQLzmFsIVjjYoVt0Labp8BhfZQkAICIE6EahcgWRp3RtgquyFNEs+g4BsISAEhEDzEKhcgWRt3RvIquqFNF0+g4dsISAEhEDdCFSqQPK07g1AVfRCmi6fwUK2EBAC5SOgHNIRqFSB5G3dm2KU3QtpunwGB9lCQAgIgSYgUJkCGaZ1b4AqsxfSdPkMBrKFgBAQAk1BoDIFMmzr3gBWVi+k6fKZ8o+MLUGFgBAYewQqUSBFtO7NnSijF9J0+UzZZQsBISAEmoRAJQqkqNa9Aa7oXkjT5TPlli0EhIAQ8ECgMpbSFUiRrXuDSpG9kKbLZ8osWwgIASHQNARKVyBFt+4NgEX1QpounymvbCEgBIRA0xAoVYGU0bo3ABbRC2m6fKassqtFQLkJASHgh0CpCqSs1r0p2rC9kKbLZ8opWwgIASHQRARKUyBltu4NkMP0QpounyljkXYYhhuBtvegLbLmizS3AvmkvVHWtMUvBIpCAM/oWqBDQN8E/RT0BGgxiOZJ/P0MdCvoDNDeoDXz5I14W4Js78O78qTX1DjFK5BuSctu3XezCfL2QpounylfwfankN7VHnQjHv6XgM/LgHdlMH4N5JM2ZQCrTJ0I4J69HrR/nTJUmTfKOhN0O/J8FH";

export const navItems = [
  { label: "Panel de Control", icon: "fa-solid fa-border-all", href: "{{DATA:SCREEN:SCREEN_1}}", active: true },
  { label: "Estadísticas", icon: "fa-solid fa-chart-simple", href: "{{DATA:SCREEN:SCREEN_144}}" },
  { label: "Transacciones", icon: "fa-solid fa-money-bill-transfer", href: "{{DATA:SCREEN:SCREEN_143}}" },
  { label: "Reportes de Ventas", icon: "fa-solid fa-file-invoice", href: "{{DATA:SCREEN:SCREEN_147}}" },
  { label: "Ajustes", icon: "fa-solid fa-gear", href: "{{DATA:SCREEN:SCREEN_78}}" }
];

export const metricsCards = [
  {
    title: "Ganancias Totales",
    value: "142.99K",
    detail: "Del mes en curso",
    icon: "fa-solid fa-wallet",
    cardBg: "bg-purple-900/30 border-purple-800/50",
    textColor: "text-purple-300",
    detailColor: "text-purple-400"
  },
  {
    title: "Ganancia Promedio",
    value: "20.284K",
    detail: "Ganancia diaria de este mes",
    icon: "fa-solid fa-chart-line",
    cardBg: "bg-purple-900/10 border-purple-800/30",
    textColor: "text-purple-300",
    detailColor: "text-purple-400"
  },
  {
    title: "Tasa de Conversión",
    value: "74.86%",
    detail: "+6.04% mayor que el mes pasado",
    icon: "fa-solid fa-chart-pie",
    cardBg: "bg-emerald-900/30 border-emerald-800/50",
    textColor: "text-emerald-300",
    detailColor: "text-emerald-400"
  }
];

export const chartBars = [
  { day: "Sun", purpleHeight: "h-[30%]", tealHeight: "h-[45%]" },
  { day: "Mon", purpleHeight: "h-[50%]", tealHeight: "h-[80%]" },
  { day: "Tue", purpleHeight: "h-[90%]", tealHeight: "h-[60%]" },
  { day: "Wed", purpleHeight: "h-[40%]", tealHeight: "h-[55%]" },
  { day: "Thu", purpleHeight: "h-[60%]", tealHeight: "h-[30%]" },
  { day: "Fri", purpleHeight: "h-[20%]", tealHeight: "h-[40%]" },
  { day: "Sat", purpleHeight: "h-[85%]", tealHeight: "h-[70%]" }
];

export const tableRows = Array.from({ length: 5 }, () => ({
  store: "Solaris Sparkle",
  location: "Miami, Florida",
  sales: "102 Cantidad",
  amount: "10.80K"
}));

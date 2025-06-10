// C:\Users\susan\uova\egg-timer\egg-timer-app\src\tauri-dialog.d.ts
declare module '@tauri-apps/api/dialog' {
  export function message(
    msg: string,
    options?: { title?: string }
  ): Promise<void>;
}

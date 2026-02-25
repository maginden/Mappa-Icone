export type OS = 'Windows' | 'macOS' | 'Android' | 'iOS';
export type Category = 'Navigazione' | 'Azioni' | 'Sistema' | 'Media' | 'File' | 'Comunicazione';

export interface IconData {
  id: string;
  name: string;
  description: string;
  context: string;
  history?: string;
  osAvailability: OS[];
  category: Category;
  lucideIcon: string;
  variations?: Partial<Record<OS, string>>;
}

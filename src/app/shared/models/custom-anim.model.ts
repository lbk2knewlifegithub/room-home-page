export interface CustomAnimation {
  duration?: number; // ms
  name?: string;
  delayLeave?: number; // ms
  delayEnter?: number; // ms
  timing?: 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
}

export const DefaultCustomAnimation: CustomAnimation = {
  duration: 300,
  delayLeave: 0,
  delayEnter: 0,
  timing: 'ease-in-out',
};

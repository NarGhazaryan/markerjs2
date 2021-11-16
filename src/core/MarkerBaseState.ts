/**
 * Represents marker's state (status) in time.
 */
export type MarkerState = 'new' | 'creating' | 'select' | 'move' | 'resize' | 'rotate' | 'edit';

/**
 * Represents marker's state used to save and restore state continue annotation in the future.
 */
export interface MarkerBaseState {
  /**
   * Marker's type name.
   */
  typeName: string;
  /**
   * Current editing state/status.
   */
  state: MarkerState;
  /**
   * Additional information about the marker.
   * 
   * @since 2.10.0
   */
  notes?: string;

  /**
   * Previous additional information about the marker.
   * 
   * @since 1.4.22
   */
   prevNotes?: string;
  /**
   * ID in markers array
   */
  id?: number;
}

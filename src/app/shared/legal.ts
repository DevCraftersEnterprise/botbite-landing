/**
 * Datos del aviso de privacidad del servicio por WhatsApp.
 *
 * PENDIENTE DE CONFIRMAR POR CARLOS antes de publicar: el brief los dejó entre
 * corchetes. Los valores actuales son los ejemplos sugeridos en el propio brief.
 */
export const WHATSAPP_PRIVACY = {
  /** Conservación máxima desde la última interacción. */
  retentionAfterLastInteraction: '12 meses',
  /** Plazo para eliminar datos cuando un Negocio Cliente termina el servicio. */
  deletionAfterTermination: '30 días',
  /** Plazo para atender una solicitud de eliminación de datos. */
  deletionRequestDeadline: '30 días',
  /** Fecha de publicación de esta sección. */
  lastUpdated: '6 de octubre de 2026',
} as const;

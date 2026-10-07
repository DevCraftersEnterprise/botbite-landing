/** El <base href="/"> rompe los enlaces "#id" puros; movemos el foco a mano. */
export function skipToContent(event: Event): void {
  event.preventDefault();
  const main = document.getElementById('contenido');
  main?.focus({ preventScroll: true });
  main?.scrollIntoView();
}

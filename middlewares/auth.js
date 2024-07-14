export default defineNuxtRouteMiddleware((to, from) => {
  // skip middleware on server (first middleware execution)
  if (import.meta.server) return;

  // now we are on the client side (second middleware execution)
  // we have access to localStorage
  if (import.meta.client)
    if (localStorage.getItem("token")) return;
    else return navigateTo("/auth/login");
});

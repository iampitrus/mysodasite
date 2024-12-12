import * as React from "react";

type Props = { className: string };

const Logo = ({}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none">
    <path
      fill="#075985"
      d="M42.853 85c1.6 0 2.973-.912 3.087-2.735v.228l.687-15.044c0-1.595-.458-3.418-2.516-3.418H23.413l20.698-21.654a6.83 6.83 0 0 0 1.83-4.558l.8-19.944c0-1.596-.343-3.533-2.401-2.963L4.66 24.029c-1.487.228-2.402 1.367-2.402 2.963V38.73c0 1.596.915 2.28 2.287 2.28l16.81-1.368L2.487 62.55l-1.144 1.14C1 64.144 1 65.17 1 65.626v11.738c0 1.482.8 2.394 2.287 2.621zm54.203-3.875c1.372-.114 1.944-1.14 1.944-2.507l-.457-12.536c0-1.482-.687-2.963-2.516-2.963l-20.24.114 18.867-18.918a4.56 4.56 0 0 0 1.601-3.42l.23-13.903a3.4 3.4 0 0 0-.497-2.227 3.43 3.43 0 0 0-1.79-1.42L52.801 14c-2.059.114-2.63 2.28-2.63 3.989l-.687 18.234c0 1.71.343 3.42 2.402 3.42l19.097 1.709-19.44 21.539c-.203.303-.45.561-.694.815-.305.318-.602.628-.793 1.008-.457.684-.572 1.824-.572 2.508l-.457 15.157c-.114 1.823 1.372 2.393 3.087 2.393l44.94-3.647Z"
    ></path>
  </svg>
);

export default Logo;
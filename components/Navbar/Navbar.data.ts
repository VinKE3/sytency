export const navItems = [
  { name: "Nosotros", href: "#nosotros" },
  {
    name: "Servicios",
    href: "#servicios",
    subItems: [
      {
        name: "F. Electrónica",
        href: "#facturacion-electronica",
        subItems: [
          { name: "Sistema Estándar", href: "#sistema-estandar" },
          { name: "Sistema a medida", href: "#sistema-medida" },
        ],
      },
      { name: "Liquidaciones de compra", href: "#liquidaciones-compra" },
      {
        name: "Guías de remisión",
        href: "#sistema-guias-remision",
        subItems: [
          {
            name: "Sistema web guías transportistas",
            href: "#guias-transportistas",
          },
          { name: "Sistema web de guías de remisión", href: "#guias-remision" },
        ],
      },
      { name: "VPS", href: "#vps" },
      { name: "Utilcon", href: "#utilcon" },
    ],
  },
  { name: "Outsourcing Contable", href: "#outsourcing-contable" },
  { name: "Desarrollo Web", href: "#desarrollo-web" },
];

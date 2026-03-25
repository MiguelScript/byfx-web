export type recurso = {
  _key: string;
  resourceType: "link" | "file";
  link?: string;
  file?: { asset: { url: string } };
};

type trabajo = {
  _id: string;
  titulo: string;
  cliente: string;
  servicio?: {
    _id: string;
    name: string;
  };
  posicion: number;
  imagen: string;
  recursos?: recurso[];
};

export default trabajo;

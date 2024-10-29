const services = {
      name: 'services',
      title: 'Servicios',
      type: 'document',
      fields: [
          {
              title: 'name',
              name: 'Nombre',
              type: 'string',
          },
          {
              name: 'description',
              title: 'Descripcion',
              type: 'string',
          },
          {
            name: 'position',
            title: 'Posición',
            type: 'number',
        },
      ],
  }
  
  export default services
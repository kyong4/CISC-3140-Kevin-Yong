export const menuItems = [
    {
     title: "Database",
     href:"http://localhost:8000/lab4/cars"
    },

    {
        title: "New Car",
        submenu: [
         {
                title: "Fill in form",
                href:"http://google.com",
               },
         {
             title: "View Confirmation",
             href:"/#"
         }
        ]
       },
    {
     title: "Changing an email"
  ,
     submenu: [
       {
        title: "Select a record from list of active car owners",
        submenu: [

            {
                   title: "Update field(s)",
                   href:"http://google.com",
                  },
                ]

       },]
    }
   ];

   
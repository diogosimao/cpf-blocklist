module.exports ={  
   entry:"./app/app.js",
   output:{  
      path: __dirname + "/dist/js/",
      filename:"bundle.js",
      sourceMapFilename:"bundle.js.map",

   },
   //watch:true,
   module:{  
      rules:[  
         {  
            test:/\.js$/,
            enforce:"pre",
            exclude:/node-modules/,

         }
      ],
      rules:[  
         {  
            test:/\.js$/,
            enforce:"pre",
            loader:"eslint-loader",

         }
      ],
      rules:[  
         {  
            test:/\.js$/,
            use:[  
               {  
                  loader:"style-loader"
               },
               {  
                  loader:"css-loader",
                  options:{  
                     modules:true
                  }
               }
            ]
         }
      ],
      rules:[  
         {  
            test:/\.html$/,
            use:[  
               {  
                  loader:"mustache-loader"
               }
            ]
         }
      ]
   },
   resolve:{  
      enforceExtension:false
   }
};
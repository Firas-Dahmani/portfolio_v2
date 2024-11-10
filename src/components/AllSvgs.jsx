export const PowerBtn = (props) => {
    return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          {...props}
        >
          <path
            fill={props.fill || "currentColor"}
            d="M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3l9-8zm0-2L1 10h3v11h6v-7h4v7h6V10h3L12 1z"
          />
        </svg>
    )
  }
  
  export const Github = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="github"
            className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </svg>
        )
  }

  export const LinkedIn = (props) => {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fab"
        data-icon="linkedin"
        className="prefix__svg-inline--fa prefix__fa-linkedin prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        {...props}
      >
        <path
          fill={props.fill}
          d="M100.28 448H7.4V148.9h92.88zm-46.44-344c-30.68 0-55.56-24.91-55.56-55.6C-1.72 17.36 23.17-.14 53.84-.14s55.56 24.9 55.56 55.6c0 30.68-24.89 55.56-55.56 55.56zm394.36 344h-92.68V304.8c0-34.13-12.22-57.4-42.88-57.4-23.4 0-37.31 15.8-43.46 31.1-2.24 5.43-2.8 13-2.8 20.61v149.1h-92.68s1.24-241.9 0-266.5h92.68v37.8c-.19.3-.43.6-.61.9h.61v-.9c12.31-19 34.26-46.2 83.36-46.2 60.87 0 106.54 39.8 106.54 125.4V448z"
        />
      </svg>
    );
  };
  
  export const Twitter = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="twitter"
            className="prefix__svg-inline--fa prefix__fa-twitter prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
        )
  }
  
  export const Facebook = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="facebook"
            className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
        )
  }
  
  export const YouTube = (props) => {
      return (
          <svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="youtube"
            className="prefix__svg-inline--fa prefix__fa-youtube prefix__fa-w-18"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            {...props}
          >
            <path
              fill={props.fill}
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
        )
  }
  
  export const DevEngineerLogo = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
          <circle cx="256" cy="256" r="248" fill={props.fill || "#6c63ff"} />
        <path
          fill="#010101"
          d="M233 236q6.72-.112 13.44-.165 2.278-.022 4.556-.061c16.257-.274 30.518 1.912 42.879 13.476 8.636 9.207 11.702 20.15 11.434 32.57-1.084 11.165-5.446 20.918-13.82 28.434-6.05 4.686-12.151 7.641-19.489 9.746l-1.648.537c-3.455.68-6.892.585-10.399.56-.771 0-1.542-.002-2.337-.004-2.455-.005-4.91-.018-7.366-.03q-2.502-.008-5.004-.014A5228 5228 0 0 1 233 321l2-1c1.385-3.624 1.141-7.429 1.161-11.26l.015-2.194q.021-3.584.027-7.167l.017-4.992q.015-5.229.02-10.458c.006-4.463.03-8.926.058-13.39.019-3.435.024-6.87.026-10.307q.004-2.467.024-4.936c.017-2.303.015-4.604.008-6.907l.011-3.967c-.387-3.612-1.256-5.51-3.367-8.422m14 5c-1.872 3.983-2.257 7.163-2.275 11.547l-.029 3.954.003 4.249-.013 4.382q-.01 4.584-.002 9.169c.006 3.91-.01 7.82-.034 11.731-.015 3.015-.016 6.03-.013 9.044q0 2.163-.015 4.325a555 555 0 0 0 .006 6.052l-.002 3.474c.419 3.442 1.263 5.34 3.374 8.073 10.04 2.225 22.524-.773 31.375-5.687 8.38-5.51 14.453-13.447 16.625-23.313.787-13.136.254-23.565-8.312-34.187-6.476-6.956-16.038-12.382-25.703-12.927l-2.094.016-2.286.01-2.355.025-2.402.014q-2.925.02-5.848.049"
        ></path>
        <path
          fill="#010101"
          d="M201 191h60v12l-2.562-1.875c-9.272-6.102-21.33-5.21-32-5.25l-2.708-.014-2.546.006-2.296.004c-1.978.013-1.978.013-3.888 1.129l-1 27c12.632-.98 12.632-.98 24-6l1-2h2v18c-4-2-4-2-7.312-4.062-4.055-2.08-8.002-2.35-12.481-2.56l-2.104-.117q-2.55-.14-5.103-.261.103 9.504.262 19.006.051 3.233.084 6.466c.034 3.098.086 6.196.142 9.294l.02 2.92.06 2.729.033 2.396c.326 2.712.326 2.712 3.399 6.189h-17l3-4c.28-2.575.39-4.903.356-7.475l.007-2.263c.003-2.464-.016-4.927-.035-7.39l-.006-5.141q-.007-5.383-.04-10.766c-.03-4.602-.04-9.205-.044-13.807q-.008-5.306-.026-10.611-.008-2.546-.015-5.092-.01-3.555-.036-7.11l-.003-2.13c-.027-3.016-.196-5.328-1.158-8.215z"
        ></path>
        <path
          fill="#030303"
          d="M108 230c5.233 1.64 10.152 3.39 15 6l-1 3c-3.062 1.188-3.062 1.188-6 2l6 3v4a852 852 0 0 1-5.25 1.5l-2.953.844C111 251 111 251 107 251v-4l7-2-7-3c.125-1.875.125-1.875 1-4 3.063-1.25 3.063-1.25 6-2l-6-3zM354 154l4 1-2 9h9v4c-2.187 2.14-2.187 2.14-5 4.25l-2.812 2.14L355 176l-2-4 4-4h-6l1-7-2.375 2C347 165 347 165 345 165c.556-3.74 2.01-5.343 4.813-7.812l2.082-1.895z"
        ></path>
        <path
          fill="#020202"
          d="m171 353 4 1 1 7 3-3 3 1c-.34 5.442-3.703 8.937-7 13-3.89-1.297-6.525-2.668-9-6 .25-2.75.25-2.75 1-5l4-1zm0 10v4h3l1-3zM133 305c2.944 2.069 3.843 3.51 4.938 6.938.074 3.66-.724 5.192-2.938 8.062-2.853 1.427-4.835 1.31-8 1-2.875-1.5-2.875-1.5-5-4-.717-2.823-.717-5.177 0-8 3.26-3.835 6.043-4.844 11-4m-6.875 5.188c-1.404 1.842-1.404 1.842-.812 4.5L126 317c2.874.334 2.874.334 6 0 1.913-1.88 1.913-1.88 3-4l-2-4c-2.804-.227-4.462-.34-6.875 1.188"
        ></path>
        <path
          fill="#040404"
          d="M285 375c2.438 1.563 2.438 1.563 4 4 .457 3.66.461 6.026-1.125 9.375-2.587 2.242-4.485 2.487-7.875 2.625-2.375-.937-2.375-.937-4-2v-2l3.438.063c3.378.353 3.378.353 4.562-1.063.04-2 .043-4 0-6l-6-2 1 3 3 1v2l-7 1c-2-5.75-2-5.75-2-8 4.122-1.999 7.436-2.498 12-2"
        ></path>
        <path
          fill="#030303"
          d="M307 365c3 1 3 1 4.387 3.434l1.3 3.003 1.325 2.997C315 377 315 377 315 379c-1.562.75-1.562.75-4 1-2.503-1.13-4.67-2.521-7-4l1 7c-3-1-3-1-4.422-3.434l-1.328-3.003-1.36-2.997L297 371l1-2c4.39.51 7.337 1.522 11 4l-1-1.75c-1-2.25-1-2.25-1-6.25M126.563 183.938 129 184l2 4 7-1-1 4-7 1 4 4-1 3c-3.76-.581-6.53-1.652-9.812-3.562l-2.395-1.38L119 193q.965-1.97 1.938-3.937l1.09-2.215c1.492-2.836 1.492-2.836 4.534-2.91M124 188l-1 3 5 1-1-4z"
        ></path>
        <path
          fill="#020202"
          d="m335 136 3 1-2 6c1.892.681 1.892.681 4 1l2-2h3c-.519 4.172-1.712 6.254-4.562 9.313l-1.942 2.113L337 155l-3-1 .5-1.812c.611-2.301.611-2.301.5-5.188-3.106 0-4.353.54-7 2l-2-3z"
        ></path>
        <path
          fill="#030303"
          d="m210 115 1 1-.187 2.875L211 122c1.92 1.774 1.92 1.774 4 3v2c-1.687.688-1.687.688-4 1-2.75-1.437-2.75-1.437-5-3v5l-3 1a819 819 0 0 1-1.937-4.687l-1.09-2.637c-.93-2.558-1.515-4.998-1.973-7.676 4.385-1.462 7.52-2.45 12-1m-6 2-1 4h4l-1-4z"
        ></path>
        <path
          fill="#020202"
          d="M289 112c7.276 2.385 7.276 2.385 10.063 4.75 1.439 3.454.968 5.704-.063 9.25-2.125 2-2.125 2-5 3-4.23-.219-6.458-.639-10-3zm3 4-3 9 4 1c1.668-1.695 1.668-1.695 3-4-.222-2.698-.222-2.698-1-5z"
        ></path>
        <path
          fill="#030303"
          d="M386 203c-1.335 3.594-2.96 6.755-5 10l7-1v3a647 647 0 0 1-4.75 1.5l-2.672.844C378 218 378 218 374 218c.48-4.22 1.166-6.797 4-10l-7 1c.2-1.887.2-1.887 1-4 2.145-1.082 2.145-1.082 4.813-1.812l2.644-.77c2.583-.425 4.093-.257 6.543.582"
        ></path>
        <path
          fill="#020202"
          d="M378 264c2.361.254 4.715.578 7.063.938l3.91.59L392 266c-.189 8.026-.189 8.026-3.187 11.625-3.517 1.72-5.122 1.579-8.813.375-1.664-1.238-1.664-1.238-3-3-.328-2.445-.328-2.445-.25-5.125.015-.89.03-1.779.047-2.695C377 265 377 265 378 264m2 5-1 2c1.729 2.146 1.729 2.146 4 4 2.167.167 2.167.167 4-1 1.284-1.984 1.284-1.984 2-4-2.957-1.478-5.742-1.06-9-1"
        ></path>
        <path
          fill="#040404"
          d="M234 378h4c1.484 1.75 1.484 1.75 2.75 4l1.297 2.25L243 386l1-7h3l-1 15h-4c-1.484-1.75-1.484-1.75-2.75-4l-1.297-2.25L237 386l-1 7h-3zM327 353c4.278 3.644 6.405 8.098 9 13l-9 6-1-3 4-4h-6l1-1.875c1.142-2.035 1.142-2.035 1-4.125l-7 3v-4c1.75-1.484 1.75-1.484 4-2.75l2.25-1.297z"
        ></path>
        <path
          fill="#030303"
          d="M137 162h2a85 85 0 0 1-2 7h2l1-2h3l-1 6c2.363.23 2.363.23 4.625-2.5L149 168c0 4.136-.152 4.698-2.5 7.75l-1.406 1.86L144 179c-5.09-1.59-8.875-4.745-13-8 3.75-6.75 3.75-6.75 6-9M191 365q2.188.716 4.375 1.438l2.46.808C200 368 200 368 202 369c-.654 5.07-2.855 9.42-5 14-4.128-.607-7.332-2.038-11-4l1-3 7 3c-.998-2.993-1.752-3.948-4-6 3.133-1.044 3.99-.934 7 0v-3l-6-2zM373 287l14 5-3 11-3-1 1-7-2-1-1 5-3-1v-5l-2-1-2 7h-3q.713-2.72 1.438-5.437l.808-3.06C372 288 372 288 373 287M212 373q2.188.465 4.375.938l2.46.527C221 375 221 375 223 376q-.467 2.376-.937 4.75l-.528 2.672c-.459 2.21-.968 4.393-1.535 6.578a764 764 0 0 1-4.375-.437l-2.46-.247C211 389 211 389 209 388v-3l7 1v-2l-4-1 1-3 5 1v-3l-7-2z"
        ></path>
        <path
          fill="#020202"
          d="M377 183c-.593 3.906-2.486 6.218-4.937 9.25l-2.153 2.703L368 197h-2c-.934-3.01-1.044-3.867 0-7-.39-2.143-.39-2.143-1-4l-5-1c2.54-2.54 3.847-2.399 7.375-2.687l2.898-.262c2.495-.047 4.364.204 6.727.949m-9 3 2 2 1-2z"
        ></path>
        <path
          fill="#030303"
          d="m317 124 3 1-1 16-4-1-1-4c-2.763-.597-5.16-1-8-1 1.47-3.585 3.4-5.444 6.438-7.812l2.37-1.895zm-3 6v3h2v-3zM253.375 106.75c3.625.25 3.625.25 5.563 1.75L260 110c-3 1-3 1-6 0v2a125 125 0 0 0 6 4l-1 5c-3.324 1.391-5.258 2.181-8.812 1.313C248 121 248 121 247 118l8 1 1-2-2.875-.875C250 115 250 115 248 113c.72-5.905.72-5.905 5.375-6.25M227 109c2.293.195 2.293.195 5 1 1.8 2.18 1.8 2.18 3.313 4.875l1.55 2.68C238 120 238 120 238 123h-4l-1-2h-6l-1 4h-2c.59-5.508 1.567-10.649 3-16m2 6-1 3h3l-1-3zM128 209l-1 4h-3l-1 6h2l-1 4-12-9 1-4c5.05-1.036 9.874-1.103 15-1m-11 4 3 3 1-3z"
        ></path>
        <path
          fill="#050505"
          d="M144.875 326.75c3.125.25 3.125.25 5 1.313 1.707 2.94 1.313 5.616 1.125 8.937h-2l-2-6h-2l.035 1.934.028 2.503.035 2.497C145 340 145 340 144 341c-3.5-.312-3.5-.312-7-1-1.354-2.709-1.065-5.01-1-8h2l2 5c1.266-2.158 1.266-2.158 1-5.562 0-4.351 0-4.351 3.875-4.688"
        ></path>
        <path
          fill="#030303"
          d="M362 312c5.458-.111 10.615.083 16 1l-1 4h-9l2.563 2.813c1.44 1.582 1.44 1.582 2.437 3.187l-1 3h-2a98 98 0 0 1-4.687-5.312l-2.512-2.989L361 315zM173 131c-1.75 3.875-1.75 3.875-4 5l1 3 5-2c-.573 2.867-.861 3.861-3 6l2 2v3l-3 1a538 538 0 0 1-4.062-5.312l-2.286-2.989L163 138c1.544-4.633 5.122-7 10-7M112 286l3 1 1 4 3 1-1-6h3l2 4 5-1 1 4q-2.904 1.008-5.812 2l-3.27 1.125C117 297 117 297 114 297c-1.193-3.877-2-6.916-2-11"
        ></path>
        <path
          fill="#020202"
          d="M107 263h3l2 3 11-1v4c-3.981 1.327-7.85 1.07-12 1v5h-2zM183 123h4a486 486 0 0 1 2.5 4.75l1.406 2.672C192 133 192 133 192 137c-1.828-.195-1.828-.195-4-1-1.484-2.18-1.484-2.18-2.75-4.875l-1.297-2.68C183 126 183 126 183 123M392 228v3c-5.075 1.263-9.728 2.27-15 2v-4q3.186-.542 6.375-1.062l3.586-.598C390 227 390 227 392 228M262 378c.847 5.08 1.09 9.848 1 15h-4l-1-14c2-1 2-1 4-1"
        ></path>
        <path
          fill="#080808"
          d="m366.625 182.938 2.477.027L371 183l-2 4h2v2l-4-1v-2h-6l-1-2c2.405-1.203 3.95-1.1 6.625-1.062"
        ></path>
        <path
          fill="#050505"
          d="m358 330 2 1c-1.186 3.375-2.276 5.647-5 8l-3-1z"
        ></path>
        <path fill="#020202" d="M384 244h3v10h-3z"></path>
        <path
          fill="#040404"
          d="M159 150c-1.443 3.366-3.333 5.51-6 8l-3-1a271 271 0 0 1 2.813-3.5l1.582-1.969C156 150 156 150 159 150"
        ></path>
        <path fill="#080808" d="m191 372 5 2-1 4v-2l-5-2z"></path>
      </svg>
    );
  };
  
  export const Anchor = (props) => {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="anchor"
        className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        {...props}
      >
        <path
          fill={props.fill}
          d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
        />
      </svg>
    )
  }
  
  
  
  export const Link = (props) => {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="link"
        className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
        
      >
        <path
          fill={props.fill}
          
          d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
        />
      </svg>
    )
  }
  
  
  
  export const Design = (props) => { 
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="palette"
        className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...props}
      >
        <path
          fill={props.fill}
          d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
        />
      </svg>
    )
  
  }
  
  export const Develope = (props) => { 
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="laptop-code"
        className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512"
        {...props}
      >
        <path
           fill={props.fill}
          d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
        />
      </svg>
    )
  
  }
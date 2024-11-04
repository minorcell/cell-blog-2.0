import { useMemo } from "react";

const tecs = [
  {
    name: "Git",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="#F34F29"
          d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"
        />
      </svg>
    ),
  },
  {
    name: "HTML",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="#E44D26"
          d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"
        />
        <path fill="#F16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z" />
        <path
          fill="#EBEBEB"
          d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"
        />
        <path
          fill="#fff"
          d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"
        />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#0277BD" rx="60" />
          <path
            fill="#EBEBEB"
            d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"
          />
          <path
            fill="#fff"
            d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Scss",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
      >
        <path
          fill="#cd6799"
          d="M16.171 18.7c-.481.221-1.008.509-2.063 1.088c-.4.225-.818.45-1.207.662c-.027-.027-.055-.061-.082-.089c-2.087-2.23-5.947-3.805-5.783-6.8c.061-1.091.436-3.955 7.413-7.433c5.742-2.83 10.311-2.046 11.1-.307c1.134 2.479-2.449 7.092-8.379 7.761a4.47 4.47 0 0 1-3.751-.948c-.314-.341-.361-.361-.477-.293c-.191.1-.068.409 0 .586a3.5 3.5 0 0 0 2.141 1.684a11.4 11.4 0 0 0 6.956-.689c3.594-1.391 6.4-5.258 5.578-8.5c-.825-3.287-6.281-4.371-11.443-2.537a26 26 0 0 0-8.79 5.047c-2.844 2.66-3.294 4.972-3.11 5.94c.662 3.437 5.4 5.674 7.3 7.331q-.148.08-.259.143c-.948.471-4.562 2.36-5.463 4.358c-1.023 2.264.164 3.887.948 4.105a5.83 5.83 0 0 0 6.281-2.544a6.3 6.3 0 0 0 .559-5.8a5 5 0 0 1 .716-.477c.484-.286.945-.568 1.354-.786a10.5 10.5 0 0 1 4.475-.989c3.246.382 3.887 2.407 3.764 3.26a2.16 2.16 0 0 1-1.03 1.459c-.225.143-.3.191-.28.293c.027.15.136.143.327.116a2.535 2.535 0 0 0 1.766-2.257c.1-2-1.807-4.194-5.183-4.174a7.8 7.8 0 0 0-2.946.587q-.225.093-.437.2Zm-4.825 7.839c-1.078 1.173-2.578 1.616-3.226 1.241c-.7-.4-.423-2.135.9-3.376a17 17 0 0 1 2.53-1.889c.157-.1.389-.232.668-.4l.075-.041l.164-.1a4.66 4.66 0 0 1-1.111 4.565"
        />
      </svg>
    ),
  },
  {
    name: "TailWind",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="#38bdf8"
          d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
        <path
          fill="#323330"
          d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
        <path
          fill="#007acc"
          d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.6 20.6 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.6 4.6 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.3 38.3 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9 9 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.8 16.8 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.5 16.5 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.7 31.7 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49 49 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
        />
      </svg>
    ),
  },
  {
    name: "Axios",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="currentColor"
          d="m34 43.978l27.38-22.913l.038 91.495l-9.32 7.74l-.153-76.091zm62.962 38.345l-27.38 22.912l-.038-91.495L78.863 6l.154 76.091z"
        />
      </svg>
    ),
  },
  {
    name: "Vue",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="none"
          d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
        />
        <path
          fill="#35495e"
          d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"
        />
        <path
          fill="#41b883"
          d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"
        />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.13em"
        height="1em"
        viewBox="0 0 256 228"
      >
        <path
          fill="#00D8FF"
          d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86"
        />
      </svg>
    ),
  },
  {
    name: "UniApp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
      >
        <defs>
          <mask id="IconifyId192a587857c7586230">
            <g
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            >
              <path
                fill="#fff"
                stroke="#fff"
                d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"
              />
              <path stroke="#000" d="M29 24a5 5 0 1 0-5-5v10a5 5 0 1 1-5-5" />
            </g>
          </mask>
        </defs>
        <path
          fill="currentColor"
          d="M0 0h48v48H0z"
          mask="url(#IconifyId192a587857c7586230)"
        />
      </svg>
    ),
  },
  {
    name: "ReactNative",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#242938" rx="60" />
          <path
            fill="#00D8FF"
            d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"
          />
          <path
            stroke="#00D8FF"
            strokeWidth="8.911"
            d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z"
            clipRule="evenodd"
          />
          <path
            stroke="#00D8FF"
            strokeWidth="8.911"
            d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z"
            clipRule="evenodd"
          />
          <path
            stroke="#00D8FF"
            strokeWidth="8.911"
            d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z"
            clipRule="evenodd"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Redux",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="#764abc"
          d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.7 39.7 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25c3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58c-4.4 8.63-16 17.27-31.6 17.27a50.5 50.5 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.5 41.5 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35c2.93-5.7 3.1-12.38.33-19.22a43.6 43.6 0 0 0-17.27-20.85a62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48m-82.75 23a7.3 7.3 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07c-2.44-.81-6-2-8.14-2.44c-.53-8.63-7.82-30.13-25.09-29.81c-6.19.17-15.31 3.1-20 9.12a43.7 43.7 0 0 0-9.64 25.25a59.6 59.6 0 0 0 8.47 36.16a2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"
        />
      </svg>
    ),
  },
  {
    name: "Three",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M8 22L3 3l19 5.5z" />
          <path d="m12.573 17.58l-6.152-1.576l8.796-9.466l1.914 6.64" />
          <path d="M12.573 17.58L11 11l6.13 2.179M9.527 4.893L11 11L4.69 9.436z" />
        </g>
      </svg>
    ),
  },
  {
    name: "eCharts",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0m-.792 5.307c2.192-.025 4.366 1.134 5.43 3.304c.909 1.852.878 3.61-.098 5.645c-.477.995-.487 1.06-.241 1.578c.214.452.727.779 1.221.779c.454 0 1.15-.586 1.252-1.054c.1-.454-.193-1.118-.607-1.377a10 10 0 0 1-.393-.255c-.129-.1.42-.38.741-.38c.687 0 1.247.526 1.375 1.29c.055.333.134.422.44.502c.859.222 1.297 1.451.755 2.116c-.22.27-.23.271-.305.042c-.267-.801-.666-1.12-1.403-1.12c-.319 0-.572.128-1.098.556c-1.006.82-1.866 1.303-2.907 1.632c-1.276.384-2.752.478-4.086.156c-2.162-.431-4.232-2.11-5.252-4.257C4.758 11.782 5.135 9 7.033 7.077a5.92 5.92 0 0 1 4.175-1.77"
        />
      </svg>
    ),
  },
  {
    name: "Node",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0.89em"
        height="1em"
        viewBox="0 0 256 289"
      >
        <path
          fill="#539E43"
          d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571"
        />
      </svg>
    ),
  },
  {
    name: "Express",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"
        />
      </svg>
    ),
  },
  {
    name: "Nest",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
      >
        <path
          fill="none"
          stroke="#ed8796"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.5 15.5l.5-3.47C10.5 16 8.34 15.28 7.52 15.5c-.23.06 1.67-.48 2.48-2c-.9.33-1.56.5-1.98.5c1.42-1.23 1.91-2.4 1.5-3.5c-.34 2.33-4.61 4.11-5.53 2.06c-.6-1.37-.28-2.23.97-2.57c0 1.06.51 1.59 1.54 1.59V10.5l1.97.91C8.16 8.14 6 6.83 2 7.5C1 6.35.5 5.52.5 5c0-.78.25-1 1-1s1-.02 2.03-1.05C5.09 1.46 7.1 1.1 9.5 2.57Q9.17 1.625 10.55.5c1.48.73 2.13 1.73 1.94 3s-1.02 1.94-2.5 2c.49.37 1.15.37 2 0a2.41 2.41 0 0 0 1.48-2c1.35 1.67 2.02 3.33 2.02 5s-.35 3.02-1.04 4.06l-.5-2.06c-.98 3.5-1.56 4.3-2.47 5Z"
        />
      </svg>
    ),
  },
  {
    name: "Next",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <circle cx="64" cy="64" r="64" />
        <path
          fill="url(#IconifyId192a587857c75862317)"
          d="M106.317 112.014L49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64 64 0 0 0 6.763-5.209"
        />
        <path
          fill="url(#IconifyId192a587857c75862318)"
          d="M81.778 38.4h8.533v51.2h-8.533z"
        />
        <defs>
          <linearGradient
            id="IconifyId192a587857c75862317"
            x1="109"
            x2="144.5"
            y1="116.5"
            y2="160.5"
            gradientTransform="scale(.71111)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="IconifyId192a587857c75862318"
            x1="121"
            x2="120.799"
            y1="54"
            y2="106.875"
            gradientTransform="scale(.71111)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Vite",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
      >
        <g fill="none">
          <rect width="256" height="256" fill="#242938" rx="60" />
          <path
            fill="url(#IconifyId192a587857c75862321)"
            d="m227.088 57.602l-93.832 167.787c-1.938 3.465-6.915 3.485-8.881.038L28.682 57.617c-2.142-3.756 1.07-8.306 5.328-7.545l93.932 16.79a5.1 5.1 0 0 0 1.812-.004l91.968-16.763c4.243-.773 7.47 3.742 5.366 7.507"
          />
          <path
            fill="url(#IconifyId192a587857c75862322)"
            d="m172.687 28.05l-69.438 13.605a2.55 2.55 0 0 0-2.055 2.352l-4.272 72.141a2.55 2.55 0 0 0 3.118 2.635l19.333-4.461c1.809-.417 3.443 1.176 3.072 2.995l-5.744 28.126c-.387 1.893 1.391 3.511 3.239 2.95l11.941-3.628c1.851-.562 3.63 1.061 3.238 2.956l-9.128 44.179c-.571 2.764 3.105 4.271 4.638 1.901l1.024-1.582l56.582-112.92c.948-1.89-.686-4.046-2.763-3.646l-19.899 3.841c-1.87.36-3.461-1.381-2.934-3.21l12.989-45.026c.528-1.832-1.069-3.575-2.941-3.209"
          />
          <defs>
            <linearGradient
              id="IconifyId192a587857c75862321"
              x1="26.346"
              x2="143.127"
              y1="44.075"
              y2="202.673"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient
              id="IconifyId192a587857c75862322"
              x1="122.551"
              x2="143.676"
              y1="31.743"
              y2="176.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFEA83" />
              <stop offset=".083" stopColor="#FFDD35" />
              <stop offset="1" stopColor="#FFA800" />
            </linearGradient>
          </defs>
        </g>
      </svg>
    ),
  },
  {
    name: "WebPack",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0.89em"
        height="1em"
        viewBox="0 0 256 290"
      >
        <path
          fill="#FFF"
          d="m128 .048l128 72.405V217.31l-128 72.405L0 217.31V72.453z"
        />
        <path
          fill="#8ED6FB"
          d="m233.153 212.287l-100.902 57.14V224.99l62.889-34.632zm6.907-6.231V86.654l-36.902 21.3v76.8zm-217.6 6.23l100.903 57.094v-44.438l-62.889-34.584zm-6.907-6.23V86.654l36.903 21.3v76.8zm4.3-127.13l103.51-58.543v42.99L57.045 99.84l-.532.29zm215.86 0L132.251 20.382v42.99l66.27 36.515l.531.29z"
        />
        <path
          fill="#1C78C0"
          d="m123.363 214.847l-62.02-34.15v-67.574l62.02 35.792zm8.888 0l62.02-34.101v-67.623l-62.02 35.792zM65.497 105.298l62.31-34.246l62.26 34.246l-62.26 35.937z"
        />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 64 64"
      >
        <path
          fill="currentColor"
          d="M37.57 7.139C34.878 3.962 32.558.712 32.087.046a.106.106 0 0 0-.175 0c-.47.666-2.79 3.916-5.482 7.093C3.354 36.536 30.072 56.37 30.072 56.37l.217.15c.202 3.069.706 7.479.706 7.479h2.01s.502-4.391.705-7.459l.218-.17S60.646 36.537 37.57 7.139M32 55.939s-1.198-1.021-1.521-1.533l-.003-.055l1.449-32.006a.076.076 0 0 1 .15 0l1.45 32.006l-.004.055c-.323.512-1.52 1.534-1.52 1.534"
        />
      </svg>
    ),
  },
  {
    name: "SQL",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.01em"
        height="1em"
        viewBox="0 0 1025 1024"
      >
        <path
          fill="currentColor"
          d="M256.06 224q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5m768 800q-5-2-14.5-5.5t-36-15.5t-51.5-25.5t-55.5-36t-53.5-47.5q-20-14-59-56q21-14 64.5-23.5t76.5-12.5l33-2q0-16-28.5-33.5t-66.5-32t-82.5-40.5t-69.5-55q-19-22-35-48.5t-37-69t-24-48.5q-20-31-57.5-84t-47.5-69q-31-48-108.5-120t-115.5-72q-25 0-46 10q-102-74-114-74q-13 0-22.5 9.5T64.06 96q0 8 31 56t66 96q2 17 5 34t5.5 29t9 28.5t9.5 24t12.5 24.5t11.5 20.5t13 21.5t12 19q-9-1-15-1q-14 0-23 44.5t-9 115.5q0 16 26 62q31 54 37 18q1-6 1-16q0-82 50-94q59 117 101 191t83 125q-83-64-177-211q-9 34-24.5 59.5t-32.5 25.5q-30 0-61-35t-49-79.5t-18-77.5q0-31 8-74.5t21-74.5q-24-34-37.5-67.5t-19.5-89.5q-5-9-14-26q-86-157-86-180q0-26 19-45t45-19q21 0 78 22t89 44q14-2 25-2q48 0 132.5 69t123.5 123q1 1 23 31.5t27.5 38.5t24.5 35t27 41t21.5 36t22 40t14.5 34q18 44 61 82t91 64t94 51.5t76 56.5t30 66q-14 1-36.5 3t-70 11.5t-68.5 23.5q20 25 64.5 59.5t77.5 59.5t33 35"
        />
      </svg>
    ),
  },
];

function HomePage() {
  const tecContent = useMemo(() => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap items-center justify-evenly ">
          {tecs.map((item, i) => (
            <div
              className="duration-500 w-8 h-8 m-2 md:m-1 flex items-center justify-center
                hover:cursor-pointer border-b border-gray-600 rounded-xl hover:bg-gray-600"
              key={i}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    );
  }, [tecs]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly animate-fadeIn">
      <span className="block text-2xl"> mCell，大前端技术爱好者。</span>
      {tecContent}
      <div className="w-full text-xl text-center">
        小站使用Next、Tailwind 编写
      </div>
    </div>
  );
}

export default HomePage;

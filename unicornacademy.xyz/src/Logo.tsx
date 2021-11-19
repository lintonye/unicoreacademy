import * as React from "react";

function Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 506 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="prefix__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={32}
        width={501}
        height={448}
      >
        <path
          d="M497.509 256.575c0 13.161-6.541 25.939-18.88 37.816-12.346 11.884-30.343 22.701-52.787 31.838-44.875 18.269-107.042 29.626-175.837 29.626-68.796 0-130.963-11.357-175.838-29.626-22.444-9.137-40.44-19.954-52.787-31.838C9.041 282.514 2.5 269.736 2.5 256.575c0-13.161 6.541-25.94 18.88-37.816 12.347-11.884 30.344-22.701 52.787-31.838 44.875-18.27 107.042-29.627 175.838-29.627 68.795 0 130.962 11.357 175.837 29.627 22.444 9.137 40.441 19.954 52.787 31.838 12.339 11.876 18.88 24.655 18.88 37.816z"
          stroke="#E5E5E5"
          strokeWidth={5}
        />
        <path
          d="M372.9 42.834c11.397 6.58 19.193 18.635 23.309 35.26 4.119 16.633 4.488 37.627 1.179 61.633-6.616 47.998-27.864 107.514-62.261 167.093-34.398 59.578-75.317 107.738-113.576 137.466-19.135 14.868-37.501 25.046-53.966 29.796-16.455 4.748-30.793 4.023-42.19-2.557-11.397-6.581-19.194-18.635-23.31-35.259-4.118-16.634-4.487-37.629-1.179-61.634 6.616-47.998 27.864-107.514 62.262-167.093 34.398-59.579 75.316-107.738 113.576-137.466 19.135-14.869 37.501-25.046 53.965-29.796 16.456-4.748 30.793-4.023 42.191 2.557z"
          stroke="#E5E5E5"
          strokeWidth={5}
        />
        <path
          d="M125.395 41.056c11.398-6.58 25.735-7.305 42.19-2.557 16.465 4.75 34.831 14.927 53.966 29.796 38.259 29.728 79.178 77.888 113.576 137.466 34.398 59.579 55.646 119.095 62.262 167.093 3.308 24.005 2.939 45-1.179 61.634-4.116 16.624-11.913 28.678-23.31 35.259-11.398 6.58-25.735 7.305-42.19 2.557-16.465-4.75-34.831-14.928-53.966-29.796-38.259-29.728-79.178-77.888-113.576-137.466-34.398-59.579-55.645-119.095-62.261-167.093-3.31-24.005-2.94-45 1.179-61.634 4.116-16.624 11.912-28.678 23.309-35.259z"
          stroke="#E5E5E5"
          strokeWidth={5}
        />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M504.009 0H-8V512.01h512.009V0zM250.5 416c-18.768-17.973-37.519-41.375-55.5-66.5l-4.41-.419c-29.318-2.784-56.099-5.328-80.09-12.275 6.353-25.33 17.08-54.154 30-82.306-12.832-27.96-23.645-53.314-30-78.5 25.043-7.241 53.669-11.536 84.5-14.5 18.108-25.373 36.584-47.385 55.5-65.5 18.744 18.195 35.314 40.229 53.208 65.5 30.538 2.91 59.407 7.39 84.299 14.5-6.214 25.242-16.219 52.883-29.007 81 12.875 28.309 22.797 54.421 29.007 79.806-25.037 7.162-53.548 12.446-84.299 15.353C285.94 377.183 269.097 397.948 250.5 416z"
          fill="#717171"
        />
      </g>
      <path
        d="M461.912 61.272l-2.055-3.425-180.98 95.002-1.674.879.783 1.72.717 1.577c1.823 4.017 2.799 6.167 4.122 8.373 1.32 2.202 2.994 4.472 6.19 8.806l1.182 1.603 1.142 1.551 1.593-1.084 168.98-115.002z"
        fill="#53C1DE"
        stroke="#000"
        strokeWidth={4}
      />
      <mask
        id="prefix__b"
        maskUnits="userSpaceOnUse"
        x={122.64}
        y={93.695}
        width={353.91}
        height={297.126}
        fill="#000"
      >
        <path fill="#fff" d="M122.64 93.695h353.91v297.126H122.64z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M260.935 149.122c.239-.66.406-1.374.587-2.147 1.036-4.427 2.531-10.812 20.568-20.435 2.736 6.879 2.925 12.411 3.108 17.769.18 5.244.353 10.321 2.904 16.331 2.671 6.297 14.999 17.635 26.528 28.239 10.702 9.842 20.716 19.053 21.684 23.013l.005.021c.573 2.412.439 5.993-.322 9.897-1.868 10.462-7.615 23.541-15.157 21.965-3.749-1.224-5.191-4.4-6.957-8.289-2-4.404-4.414-9.722-11.063-14.152-5.548-2.125-10.162-1.859-14.826-1.589-6.614.382-13.329.77-22.949-5.653a10.744 10.744 0 01-.192-.129l-.022.043c-7.042 13.8 14.791 29.508 31.651 34.063 16.877 4.559 30.63 14.189 34.409 35.624 20.255-1.986 26.492-22.107 31.164-37.18 2.731-8.81 4.928-15.896 9.077-16.627 6.112-1.078 31.343.878 53.876 11.119 19.803 9 31.854 16.937 34.289 24.572 5.614 17.595 4.633 51.923-15.886 66.591-22.436-7.597-23.004-33.616-19.91-33.157 3.095.459 20.604-5.642 14.905-23.724-2.706-7.315-7.081-7.093-12.68-6.809-2.342.119-4.898.248-7.635-.158-3.414-.506-6.041-2.713-8.829-5.056-4.794-4.027-10.063-8.455-20.627-5.322-9.501 2.818-10.266 13.065-11.309 27.044-1.404 18.823-3.313 44.412-27.736 67.74-4.393 2.835-12.875 2.424-21.497 2.006-8.192-.397-16.511-.801-21.572 1.569-48.763 22.833-73.722 3.906-86.2-5.557-2.113-1.602-3.869-2.933-5.321-3.744 2.828-1.261 5.795-2.597 8.611-4.176-8.749-3.746-15.528-7.545-18.238-10.382-1.005-5.7-1.463-9.741-1.321-12.792-25.522-22.705-31.556-53.805-35.328-73.243a465.46 465.46 0 00-1.073-5.422c-1.814.153-7.989 3.116-18.169 13.751 5.345-43.212 33.44-61.885 44.188-69.029 3.363-2.235 5.028-3.342 3.764-3.717-3.859-1.148-7.521.331-13.783 2.86-2.34.946-5.043 2.037-8.255 3.194.215-.308.492-.783.852-1.4 4.32-7.415 20.556-35.283 84.687-37.522zm-.126.327c-.582.316-1.152.639-1.71.971.506-.18 1.005-.347 1.495-.501.078-.154.149-.31.215-.47z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M260.935 149.122c.239-.66.406-1.374.587-2.147 1.036-4.427 2.531-10.812 20.568-20.435 2.736 6.879 2.925 12.411 3.108 17.769.18 5.244.353 10.321 2.904 16.331 2.671 6.297 14.999 17.635 26.528 28.239 10.702 9.842 20.716 19.053 21.684 23.013l.005.021c.573 2.412.439 5.993-.322 9.897-1.868 10.462-7.615 23.541-15.157 21.965-3.749-1.224-5.191-4.4-6.957-8.289-2-4.404-4.414-9.722-11.063-14.152-5.548-2.125-10.162-1.859-14.826-1.589-6.614.382-13.329.77-22.949-5.653a10.744 10.744 0 01-.192-.129l-.022.043c-7.042 13.8 14.791 29.508 31.651 34.063 16.877 4.559 30.63 14.189 34.409 35.624 20.255-1.986 26.492-22.107 31.164-37.18 2.731-8.81 4.928-15.896 9.077-16.627 6.112-1.078 31.343.878 53.876 11.119 19.803 9 31.854 16.937 34.289 24.572 5.614 17.595 4.633 51.923-15.886 66.591-22.436-7.597-23.004-33.616-19.91-33.157 3.095.459 20.604-5.642 14.905-23.724-2.706-7.315-7.081-7.093-12.68-6.809-2.342.119-4.898.248-7.635-.158-3.414-.506-6.041-2.713-8.829-5.056-4.794-4.027-10.063-8.455-20.627-5.322-9.501 2.818-10.266 13.065-11.309 27.044-1.404 18.823-3.313 44.412-27.736 67.74-4.393 2.835-12.875 2.424-21.497 2.006-8.192-.397-16.511-.801-21.572 1.569-48.763 22.833-73.722 3.906-86.2-5.557-2.113-1.602-3.869-2.933-5.321-3.744 2.828-1.261 5.795-2.597 8.611-4.176-8.749-3.746-15.528-7.545-18.238-10.382-1.005-5.7-1.463-9.741-1.321-12.792-25.522-22.705-31.556-53.805-35.328-73.243a465.46 465.46 0 00-1.073-5.422c-1.814.153-7.989 3.116-18.169 13.751 5.345-43.212 33.44-61.885 44.188-69.029 3.363-2.235 5.028-3.342 3.764-3.717-3.859-1.148-7.521.331-13.783 2.86-2.34.946-5.043 2.037-8.255 3.194.215-.308.492-.783.852-1.4 4.32-7.415 20.556-35.283 84.687-37.522zm-.126.327c-.582.316-1.152.639-1.71.971.506-.18 1.005-.347 1.495-.501.078-.154.149-.31.215-.47z"
        fill="#fff"
      />
      <path
        d="M261.522 146.975l3.895.911-3.895-.911zm-.587 2.147l.14 3.998 2.703-.095.919-2.543-3.762-1.36zm21.155-22.582l3.717-1.478-1.653-4.157-3.947 2.106 1.883 3.529zm3.108 17.769l-3.997.136.009.281.049.277 3.939-.694zm0 0l3.998-.137-.01-.281-.049-.277-3.939.695zm2.904 16.331l-3.683 1.563 3.683-1.563zm26.528 28.239l2.708-2.944-2.708 2.944zm21.684 23.013l3.889-.938-.003-.012-3.886.95zm.005.021l3.892-.925-.003-.013-3.889.938zm-.322 9.897l-3.926-.766-.007.031-.005.032 3.938.703zm-15.157 21.965l-1.241 3.802.208.068.215.045.818-3.915zm-6.957-8.289l3.642-1.654-3.642 1.654zm-11.063-14.152l2.217-3.329-.37-.246-.416-.16-1.431 3.735zm-14.826-1.589l.231 3.993-.231-3.993zm-22.949-5.653l2.221-3.326-.001-.001-2.22 3.327zm-.192-.129l2.237-3.316-3.736-2.519-2.059 4.007 3.558 1.828zm-.022.043l-3.558-1.828-.005.01 3.563 1.818zm31.651 34.063l1.043-3.862-1.043 3.862zm34.409 35.624l-3.94.694.644 3.648 3.686-.361-.39-3.981zm31.164-37.18l3.821 1.185-3.821-1.185zm62.953-5.508l1.655-3.642-1.655 3.642zm34.289 24.572l3.811-1.216-3.811 1.216zm-15.886 66.591l-1.283 3.789 1.941.657 1.668-1.192-2.326-3.254zm-5.005-56.881l3.815-1.202-.029-.094-.034-.092-3.752 1.388zm-12.68-6.809l.202 3.995-.202-3.995zm-7.635-.158l-.587 3.957.587-3.957zm-8.829-5.056l2.573-3.062-2.573 3.062zm-20.627-5.322l1.137 3.835-1.137-3.835zm-11.309 27.044l-3.989-.298 3.989.298zm-27.736 67.74l2.169 3.361.32-.206.274-.262-2.763-2.893zm-21.497 2.006l-.194 3.995.194-3.995zm-21.572 1.569l1.696 3.622-1.696-3.622zm-86.2-5.557l-2.417 3.188 2.417-3.188zM215 347l-1.629-3.653-7.294 3.253 6.973 3.893L215 347zm8.611-4.176l1.956 3.489 7.081-3.97-7.463-3.196-1.574 3.677zm-18.238-10.382l-3.939.694.21 1.193.836.876 2.893-2.763zm-1.321-12.792l3.996.186.089-1.906-1.426-1.269-2.659 2.989zm-35.328-73.243l3.927-.762-3.927.762zm-1.073-5.422l3.918-.808-.717-3.475-3.536.297.335 3.986zm-18.169 13.751l-3.97-.491-1.481 11.97 8.34-8.713-2.889-2.766zm44.188-69.029l-2.215-3.331 2.215 3.331zm3.764-3.717l1.141-3.834-1.141 3.834zm-13.783 2.86l1.498 3.709-1.498-3.709zm-8.255 3.194l-3.276-2.295-7.233 10.329 11.864-4.271-1.355-3.763zm.852-1.4l-3.457-2.013 3.457 2.013zm84.561-37.195l3.698 1.525 4.289-10.404-9.893 5.363 1.906 3.516zm-1.71.971l-2.043-3.439 3.381 7.208-1.338-3.769zm1.495-.501l1.201 3.815 1.607-.505.761-1.502-3.569-1.808zm-2.967-3.856c-.192.824-.309 1.3-.454 1.7l7.524 2.719c.333-.921.55-1.872.72-2.596l-7.79-1.823zm22.58-23.052c-9.256 4.938-14.644 9.237-17.866 13.154-3.346 4.068-4.151 7.493-4.714 9.898l7.79 1.823c.473-2.022.934-4.002 3.103-6.639 2.293-2.788 6.672-6.493 15.453-11.178l-3.766-7.058zm8.989 21.161c-.185-5.395-.377-11.536-3.389-19.11l-7.434 2.956c2.459 6.183 2.645 11.107 2.828 16.427l7.995-.273zm-.059-.558l-7.878 1.389 7.878-1.389zm2.647 15.464c-2.232-5.26-2.409-9.664-2.588-14.906l-7.995.274c.179 5.246.35 10.996 3.218 17.757l7.365-3.125zm25.554 26.857c-5.785-5.321-11.668-10.733-16.44-15.593-2.383-2.428-4.437-4.665-6.037-6.641-1.64-2.026-2.63-3.569-3.077-4.623l-7.365 3.125c.889 2.094 2.441 4.329 4.225 6.532 1.823 2.252 4.072 4.692 6.546 7.212 4.943 5.034 10.988 10.593 16.733 15.876l5.415-5.888zm22.862 25.007c-.466-1.904-1.776-3.812-3.037-5.41-1.374-1.741-3.167-3.689-5.189-5.746-4.048-4.114-9.31-8.953-14.636-13.851l-5.415 5.888c5.375 4.944 10.471 9.632 14.348 13.573 1.939 1.972 3.5 3.684 4.611 5.091.555.703.956 1.278 1.225 1.73.288.483.333.673.322.625l7.771-1.9zm.008.033l-.005-.021-7.777 1.876.005.021 7.777-1.876zm-.285 11.6c.806-4.136 1.052-8.368.288-11.587l-7.784 1.849c.382 1.606.359 4.536-.356 8.207l7.852 1.531zm-19.901 25.115c3.219.673 6.116-.296 8.436-1.961 2.242-1.607 4.063-3.926 5.523-6.373 2.928-4.908 4.961-11.285 5.953-16.843l-7.875-1.406c-.876 4.904-2.65 10.297-4.948 14.15-1.153 1.933-2.299 3.243-3.315 3.971-.936.672-1.587.746-2.138.631l-1.636 7.831zm-9.781-10.55c1.612 3.55 3.669 8.58 9.358 10.437l2.482-7.605c-1.809-.59-2.637-1.913-4.556-6.14l-7.284 3.308zm-9.639-12.477c5.65 3.764 7.682 8.166 9.639 12.477l7.284-3.308c-2.042-4.498-4.839-10.731-12.488-15.827l-4.435 6.658zm-12.377-.925c4.661-.269 8.496-.457 13.163 1.332l2.863-7.471c-6.427-2.462-11.82-2.117-16.487-1.847l.461 7.986zm-25.401-6.319c5.226 3.49 9.823 5.227 14.123 5.99 4.232.751 8.008.518 11.278.329l-.461-7.986c-3.345.193-6.234.345-9.419-.22-3.115-.553-6.686-1.833-11.079-4.766l-4.442 6.653zm-.208-.139l.209.14 4.44-6.655-.175-.118-4.474 6.633zm5.773-1.446l.022-.042-7.116-3.657-.022.043 7.116 3.656zm29.136 28.373c-7.861-2.124-16.941-6.893-23.107-12.631-6.402-5.957-8.237-11.414-6.024-15.752l-7.126-3.636c-4.829 9.462.731 18.76 7.7 25.245 7.206 6.705 17.473 12.066 26.471 14.497l2.086-7.723zm37.305 38.791c-2.025-11.489-6.787-20.06-13.493-26.361-6.651-6.25-14.977-10.044-23.812-12.43l-2.086 7.723c8.043 2.173 15.032 5.474 20.42 10.537 5.335 5.014 9.339 11.975 11.092 21.92l7.879-1.389zm23.405-37.669c-2.369 7.64-4.951 15.882-9.268 22.495-4.201 6.437-9.854 11.044-18.467 11.888l.781 7.962c11.642-1.142 19.236-7.588 24.385-15.477 5.034-7.712 7.906-17.067 10.21-24.499l-7.641-2.369zm12.202-19.383c-4.209.742-6.553 4.488-7.988 7.506-1.559 3.282-2.88 7.572-4.214 11.877l7.641 2.369c1.397-4.506 2.54-8.164 3.799-10.811.62-1.306 1.167-2.137 1.617-2.626a2.17 2.17 0 01.448-.394.506.506 0 01.074-.038l.012-.004-1.389-7.879zm56.226 11.417c-11.665-5.301-23.961-8.433-34.098-10.109-5.078-.839-9.655-1.32-13.391-1.52-3.643-.195-6.741-.139-8.737.212l1.389 7.879c1.061-.187 3.409-.291 6.92-.102 3.418.183 7.703.629 12.514 1.424 9.639 1.594 21.225 4.56 32.093 9.499l3.31-7.283zm36.445 26.998c-1.634-5.122-6.19-9.655-12.145-13.833-6.09-4.272-14.312-8.626-24.3-13.165l-3.31 7.283c9.815 4.461 17.52 8.576 23.015 12.431 5.631 3.95 8.317 7.203 9.119 9.715l7.621-2.431zm-17.371 71.061c11.454-8.187 17.161-21.619 19.362-34.792 2.206-13.198 1.022-26.825-1.991-36.269l-7.621 2.431c2.6 8.151 3.733 20.486 1.722 32.519-2.015 12.057-7.059 23.123-16.124 29.603l4.652 6.508zm-21.649-40.368c-1.784-.264-3.189.549-4.007 1.401-.723.754-1.102 1.62-1.312 2.226-.436 1.256-.599 2.746-.617 4.198-.038 2.994.532 6.9 1.95 10.997 2.853 8.244 9.348 17.788 22.026 22.081l2.566-7.577c-9.758-3.305-14.765-10.569-17.032-17.12-1.142-3.299-1.536-6.287-1.511-8.28.013-1.041.138-1.568.176-1.676.027-.078-.069.269-.472.689a3.408 3.408 0 01-2.941.975l1.174-7.914zm10.503-18.565c1.221 3.875 1.125 6.841.48 9.098-.651 2.277-1.941 4.111-3.528 5.571-1.605 1.477-3.465 2.522-5.083 3.165-.804.32-1.497.519-2.007.625-.619.128-.68.059-.365.106l-1.174 7.914c1.089.161 2.252.002 3.161-.186a20.422 20.422 0 003.339-1.024c2.358-.937 5.099-2.461 7.546-4.713 2.464-2.267 4.677-5.32 5.803-9.259 1.131-3.957 1.087-8.535-.542-13.701l-7.63 2.404zm-8.663-4.016c3.04-.154 4.601-.165 5.782.291.758.293 1.861.983 2.945 3.911l7.503-2.776c-1.623-4.387-4.061-7.244-7.566-8.598-3.083-1.19-6.509-.948-9.069-.818l.405 7.99zm-8.424-.196c3.185.472 6.118.313 8.424.196l-.405-7.99c-2.377.121-4.555.22-6.845-.119l-1.174 7.913zm-10.815-5.95c2.603 2.187 6.088 5.249 10.815 5.95l1.174-7.913c-2.101-.312-3.87-1.664-6.843-4.162l-5.146 6.125zm-16.917-4.55c4.544-1.347 7.601-.993 9.931-.115 2.501.941 4.521 2.594 6.986 4.665l5.146-6.125c-2.329-1.957-5.34-4.532-9.313-6.027-4.144-1.56-9.004-1.853-15.024-.068l2.274 7.67zm-8.457 23.507c.535-7.164.971-12.67 2.299-16.774 1.227-3.788 3.013-5.8 6.158-6.733l-2.274-7.67c-6.356 1.885-9.703 6.405-11.495 11.939-1.689 5.22-2.157 11.827-2.666 18.642l7.978.596zm-28.962 70.335c25.593-24.447 27.551-51.419 28.962-70.335l-7.978-.596c-1.397 18.729-3.258 42.935-26.509 65.146l5.525 5.785zm-24.454 3.108c4.257.207 8.75.429 12.741.216 3.875-.206 7.995-.84 11.119-2.856l-4.337-6.722c-1.27.819-3.588 1.397-7.207 1.59-3.504.186-7.563-.007-11.928-.218l-.388 7.99zm-19.682 1.196c1.79-.838 4.482-1.307 8.072-1.447 3.528-.138 7.472.05 11.61.251l.388-7.99c-4.054-.197-8.366-.409-12.31-.255-3.883.151-7.881.664-11.152 2.196l3.392 7.245zm-90.313-5.991c6.276 4.759 16.234 12.345 31.049 15.608 14.892 3.28 34.221 2.109 59.264-9.617l-3.392-7.245c-23.721 11.107-41.252 11.89-54.151 9.049-12.974-2.858-21.734-9.466-27.936-14.17l-4.834 6.375zm-4.854-3.439c1.151.642 2.648 1.766 4.854 3.439l4.834-6.375c-2.021-1.532-4.034-3.07-5.788-4.049l-3.9 6.985zm8.605-11.158c-2.635 1.477-5.442 2.745-8.284 4.012l3.258 7.306c2.815-1.255 5.94-2.659 8.938-4.34l-3.912-6.978zm-19.175-4.13c1.774 1.856 4.567 3.748 7.775 5.567 3.289 1.865 7.312 3.815 11.782 5.729l3.148-7.354c-4.279-1.832-8.021-3.654-10.985-5.335-3.047-1.727-4.998-3.153-5.935-4.133l-5.785 5.526zm-2.423-15.742c-.165 3.526.366 7.942 1.377 13.673l7.878-1.389c-.999-5.668-1.384-9.335-1.264-11.911l-7.991-.373zm6.654-2.802c-24.401-21.707-30.275-51.505-34.06-71.016l-7.854 1.524c3.758 19.366 9.953 51.767 36.597 75.469l5.317-5.977zm-34.06-71.016c-.373-1.923-.73-3.761-1.082-5.468l-7.835 1.616c.341 1.652.688 3.442 1.063 5.376l7.854-1.524zm-5.335-8.646c-1.157.097-2.391.545-3.535 1.082-1.233.577-2.683 1.413-4.342 2.551-3.319 2.28-7.615 5.872-12.847 11.338l5.779 5.532c4.948-5.169 8.83-8.375 11.597-10.275 1.384-.95 2.454-1.549 3.208-1.902.842-.395 1.06-.375.81-.354l-.67-7.972zm-13.865 18.228c5.12-41.383 31.897-59.186 42.433-66.188l-4.429-6.663c-10.96 7.285-40.372 26.828-45.943 71.869l7.939.982zm42.433-66.188c1.545-1.028 3.115-2.058 4.06-2.898.263-.234.597-.554.902-.948a4.73 4.73 0 00.955-2.141 4.272 4.272 0 00-1.164-3.679c-.762-.782-1.633-1.09-2.062-1.217l-2.281 7.667c-.114-.033-.76-.225-1.384-.865a3.725 3.725 0 01-1.007-3.181c.14-.868.548-1.391.621-1.486.116-.15.182-.198.106-.13-.412.366-1.357 1.007-3.175 2.215l4.429 6.663zm2.691-10.883c-2.81-.836-5.451-.655-8.097.003-2.513.625-5.287 1.755-8.325 2.983l2.996 7.417c3.224-1.302 5.413-2.177 7.261-2.636 1.715-.427 2.835-.412 3.884-.1l2.281-7.667zm-16.422 2.986c-2.341.945-4.98 2.011-8.112 3.138l2.71 7.527c3.292-1.185 6.059-2.303 8.398-3.248l-2.996-7.417zm-3.48 9.196c.335-.479.713-1.135 1.031-1.68l-6.913-4.027c-.401.688-.576.982-.671 1.118l6.553 4.589zm1.031-1.68c2.024-3.474 6.779-11.678 18.633-19.359 11.895-7.707 31.249-15.08 62.738-16.179l-.279-7.995c-32.642 1.139-53.472 8.819-66.809 17.46-13.376 8.667-18.899 18.104-21.196 22.046l6.913 4.027zm79.199-42.725c-.627.34-1.243.689-1.847 1.048l4.086 6.878a44.7 44.7 0 011.573-.893l-3.812-7.033zm.491.17c-.539.17-1.083.352-1.633.547l2.676 7.539c.462-.164.915-.315 1.358-.455l-2.401-7.631zm-2.283 1.822c-.03.072-.058.133-.085.186l7.137 3.616c.128-.255.242-.506.344-.753l-7.396-3.049z"
        fill="#000"
        mask="url(#prefix__b)"
      />
      <circle
        cx={282.568}
        cy={177.689}
        r={7.915}
        transform="rotate(-9.998 282.568 177.689)"
        fill="#000"
      />
      <ellipse
        cx={321.161}
        cy={208.557}
        rx={3.957}
        ry={2.473}
        transform="rotate(37.732 321.161 208.557)"
        fill="#000"
      />
      <path
        d="M33.564 195.254l-2.832-3.556-.708 4.491c-3.819 24.243 1.313 41.287 11.948 52.952 10.56 11.583 26.258 17.538 42.939 20.289 20.188 3.33 42.247 2.031 59.414-.024a325.734 325.734 0 01-20.026 4.065c-21.494 3.675-46.339 5.76-65.402 2.577l-3.523-.588 1.34 3.311c5.467 13.512 13.939 21.918 24.11 26.651 10.111 4.705 21.736 5.705 33.445 4.75 14.207-1.159 28.831-5.236 41.435-9.348a259.45 259.45 0 01-15.434 6.664c-16.58 6.525-35.612 11.992-50.634 11.735l-4.698-.081 3.198 3.442c7.857 8.453 14.644 14.129 21.32 17.38 6.751 3.288 13.284 4.046 20.492 2.866 7.119-1.165 14.886-4.221 24.149-8.478 4.407-2.025 9.193-4.342 14.438-6.881l.852-.412c3.096-1.499 6.355-3.074 9.799-4.716-.328.315-.667.637-1.017.965-4.049 3.793-9.504 8.352-15.757 12.741-12.598 8.843-28.054 16.724-41.642 16.709l-4.977-.006 3.59 3.448c8.167 7.844 16.655 11.576 25.105 12.417 8.412.837 16.609-1.208 24.209-4.612 11.388-5.102 21.752-13.425 29.793-20.169a64.71 64.71 0 01-1.047 1.556c-2.816 4.056-6.69 8.671-11.361 13.154-9.375 8.998-21.755 17.267-35.017 19.605l-6.146 1.083 5.631 2.691c.442.211.903.433 1.381.663 5.151 2.48 12.339 5.94 20.295 7.785 8.732 2.025 18.607 2.159 27.955-3.162 14.899-8.482 21.951-15.97 26.783-23.71.202 6.003-2.518 15.313-14.472 24.725l-4.787 3.769 6.09-.199c6.607-.215 21.681-2.294 36.438-9.288 14.782-7.006 29.468-19.064 34.727-39.321l.438-1.688-1.612-.664c-37.6-15.48-57.652-33.561-68.426-51.52-10.781-17.972-12.432-36.076-12.728-51.988-.057-3.055-.7-5.6-2.421-7.329-1.743-1.751-4.164-2.242-6.739-2.209-2.583.033-5.72.6-9.309 1.388-1.745.384-3.73.852-5.866 1.355a605.408 605.408 0 01-6.805 1.576c-19.285 4.316-48.853 9.192-90.38.112-4.65-1.017-11.99-4.519-20.516-10.72-8.481-6.169-18.004-14.911-27.032-26.246z"
        fill="#53C1DE"
        stroke="#000"
        strokeWidth={4}
      />
    </svg>
  );
}

export default Icon;

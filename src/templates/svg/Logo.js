import React from "react";

const Logo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        viewBox="0 0 540 540"
        {...props}
    >
        <path
            style={{
                fill: "#c4dfe6",
                fillOpacity: 1,
                strokeLinejoin: "miter",
            }}
            d="M284.8 106.7c-3.8 6.1-4.7 7.7-5.8 10.1-.6 1.4-1.5 2-2.2 1.6-.6-.4-.8-.3-.4.4.3.6-.3 2.6-1.4 4.4-1 1.8-2.6 4.6-3.4 6.3-.9 1.6-3.2 6-5.3 9.6-2.1 3.6-6.9 12.1-10.7 18.8l-7 12.1h-78.1l-19-33c-14.4-25.1-19.2-32.7-20.1-31.7-.9 1-10.3 17.1-35.1 60.4l-2.5 4.2 19.4 33.6 19.3 33.5 72-.1c39.6-.1 91.3-.5 114.9-.8l42.8-.6 18.9-32.5c10.3-17.9 18.8-33 18.9-33.6 0-.6-4.3-8.5-9.5-17.5s-13.6-23.7-18.7-32.6l-9.3-16.2-37.7-.1h-37.6l-2.4 3.7zM272 361.5V409h13v-95h-13v47.5zM192.7 319.7c-.3 1-.8 4-1.2 6.8-1.2 10.3-1.3 10.5-5.1 10.5-3.4 0-3.4 0-3.4 4.5 0 4.3.1 4.5 2.9 4.5h3l.3 27.2c.3 26.3.4 27.4 2.6 30.9 2.8 4.6 6.8 6.3 13.2 5.7 6.1-.6 10-3.7 10-8 0-2.9-.1-2.9-4.2-2.3-3 .4-4.9.2-6.3-.9-1.9-1.4-2-2.8-2.3-27l-.4-25.6H214v-9h-12v-19h-4.4c-3.4 0-4.6.4-4.9 1.7zM144.7 319.7c-.4.3-.7 20.6-.7 45V409h35v-10l-5.2-.1c-2.9-.1-7.5-.2-10.3-.3l-5-.1-.3-15.2-.3-15.2 7.8-.3 7.8-.3.3-5.3.3-5.2H158v-27h20v-11h-16.3c-9 0-16.7.3-17 .7zM231.5 337.3c-8.5 3.5-12.2 10.1-10.8 19l.6 3.8 5.1-.3 5.1-.3.5-4.7c.6-5.8 3-8.8 6.9-8.8 4.5 0 6.1 3.1 6.1 11.7v7.3l-7.6 3.6c-13.1 6.2-18.4 13.6-18.4 25.1.1 5.4 3.3 11.9 7.2 14.3 4.7 3 12.4 2.3 17.2-1.4l3.5-2.7.7 2.6c.6 2.2 1.1 2.5 5.6 2.5h4.9l-.3-31.3c-.3-34.7-.6-36-7.1-39.3-4-2.1-15.2-2.8-19.2-1.1zm11.4 60.9c-4.5 3.8-9.4 1.1-10.4-5.7-1-6.2 2.2-12.6 7.8-16l4.2-2.5.3 11.3c.3 10.4.1 11.3-1.9 12.9zM307.9 338.3c-8.3 4.4-11.5 16.2-10.6 39.2.6 14.8 2.3 21.9 6.7 26.9 4 4.5 7.8 5.9 14.8 5.4 7.6-.5 11.7-3.4 14.9-10.5 5.5-12 5.4-42.5-.2-53.8-2-4.2-3.5-5.8-6.9-7.4-5.8-2.9-13-2.8-18.7.2zm13.8 10.4c1.6 2.4 1.8 5.3 1.8 24.3 0 19.2-.2 21.9-1.8 24.4-2.6 3.9-6.6 3.3-9-1.4-1.6-3.1-1.7-6-1.5-24.6.3-19.2.5-21.4 2.2-23.3 2.7-2.9 6.2-2.7 8.3.6zM368.5 337.9c-2.2 1-4.6 2.5-5.4 3.4-2 2.5-3.1 2.1-3.1-1.3 0-3-.1-3-5.5-3H349v72h14v-29.5c0-29.2 0-29.4 2.2-31.5 3.1-2.8 7.8-2.3 9.5 1 .9 1.8 1.3 10.2 1.3 31.2V409h13v-30.8c0-28-.2-31.1-1.9-34.9-3.2-7-10.5-9.1-18.6-5.4zM301.3 414.5c-2.7 1.9-3.7 5.9-2.3 10.1 1.9 5.8 8.8 7.4 12.8 3.1 2.9-3.1 3-9.9.2-12.7-2.4-2.4-7.6-2.6-10.7-.5zM125.5 422.9c-9.6 2.5-14.9 9.4-14.9 19.7 0 8.5 3.9 16.1 14.9 28.9 12.1 14 14.8 20 12.5 27-1.3 3.9-5.6 5.8-10 4.3-3.7-1.2-5.2-4.4-5.8-12l-.5-6.8h-5.2c-5.1 0-5.3.1-5.9 3.1-1.7 8.5.1 16.8 4.7 21.7 1.1 1.2 4.6 3 7.5 3.8 10.1 3 19.8.3 25.6-6.9 2.9-3.7 3.1-4.4 3.1-12.5 0-10.9-1.6-14.1-16.1-31.7-10.5-12.8-12.8-17.2-11.7-22.7.9-4.6 5.9-7 10.8-5.2 2.4 1 4.2 5.2 5 12.2l.7 6.3 5.1-.3 5.2-.3.8-5c1.7-9.7-1.9-18.2-9.3-22-3.2-1.7-12.7-2.6-16.5-1.6zM385.5 440.5c-6.2 1.6-10.8 6.4-12.9 13.6-2.3 7.6-2.2 37 .1 45.2 3.1 11.1 11.1 16.1 22.1 13.9 2.9-.6 6.5-2 8.1-3.1 3.5-2.6 6.1-8.7 6.1-14.6V491h-11v3.2c0 6.8-4.4 10.8-9.1 8.4-3.3-1.6-4.8-6.6-4.8-15.9l-.1-7.7h11.9c13.9 0 13 .8 13.8-12 .7-11.2-1.2-18.5-6.2-22.9-3.3-2.8-4.6-3.4-10.7-4.5-1.3-.2-4.5.2-7.3.9zm9 11c2.2 2.2 2.5 3.2 2.5 10.5v8h-13.3l.6-7.8c.6-9.7 2-12.4 7-13.1.4 0 1.9 1 3.2 2.4zM171.3 442.5c-8.1 5-10.8 15-10 38.5.5 17.3 1.7 22.4 6.8 27.6 7.8 8.1 23.5 6.3 29.1-3.1.9-1.7 2-5.7 2.4-8.8l.7-5.8-5.9.3-5.9.3-.3 4.2c-.4 5.1-3.7 8.3-7.7 7.5-4-.7-5.5-4.8-5.5-15.2v-9h23.9l.6-5.4c1.2-9.3.2-20.6-2.1-25-3.2-6.2-6.4-8-14.7-8.4-6.3-.3-7.7 0-11.4 2.3zm15.3 11.1c.8 1.8 1.4 6.3 1.4 9.9v6.5h-13v-6.9c0-8.3 1.2-11.9 4.2-13 3.5-1.3 5.9-.1 7.4 3.5zM226 443.6l-4 3.6v-3.1c0-3.1 0-3.1-5.5-3.1H211v72h14v-61l2.6-1.6c3.6-2.4 5.2-.4 6 7.4l.7 6.2h4.2c4.7 0 5-.3 6-7.2 1.5-9.6-3.1-16.8-10.6-16.8-3.1 0-4.8.8-7.9 3.6zM247.6 440.9c-.2.3 3.3 16.7 7.7 36.3l8.1 35.8h5.8c3.2 0 5.8-.2 5.8-.4s3.3-15 7.4-32.8c4.1-17.7 7.7-33.8 8.1-35.6l.7-3.2h-12.9l-3.6 20.7c-2 11.5-4.1 23.5-4.5 26.8l-.8 6-.7-6c-.4-3.3-2.4-15.3-4.4-26.8l-3.7-20.7-3.6-.2c-1.9 0-4.8-.2-6.3-.3-1.5-.1-2.9.1-3.1.4zM336.5 441.2c-4.8 2.6-7.6 6.4-9.6 13-1.9 6-2.1 8.9-1.7 25.1.3 18.1.3 18.4 3.3 24.2 4 7.7 9.4 10.9 17.3 10.2 9.9-1 14.8-6.3 15.9-17.3l.6-5.4H350v3.5c0 1.9-.5 4.6-1.2 6-1.6 3.5-6.1 3.5-8.5-.2-1.6-2.4-1.8-5.3-1.8-23.3 0-14.8.4-21.4 1.3-23.7 1.4-3.1 4.2-4.6 6.8-3.6 1.5.5 3.2 5.7 3.6 10.8.3 2.9.5 3 5.5 3.3l5.2.3.7-3.6c1.5-8.2-1.6-15.9-7.6-19-3.4-1.8-14.6-2-17.5-.3zM299 477v36h14v-72h-14v36z"
        />
    </svg>
)

export default Logo
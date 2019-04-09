import React from "react";

import Images from "./components/images";
// https://content.kufar.by/line_thumbs_2x/58/5865189356.jpg
// "images":[{"id":"7115003193"}]
// https://content.kufar.by/line_thumbs_2x/{substring(images[0].id)}}/{images[0].id}.jpg

class App extends React.Component {
    render() {
        return <Images />;
    }
}

export default App;

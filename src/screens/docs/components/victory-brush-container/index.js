import React from "react";
import * as Victory from "victory";
import EcologyRecipe from "../../../../components/ecology-recipe";
import markdown from "../../../../markdown";
const overview = require("!!raw!./ecology.md");

class VictoryBrushContainer extends React.Component {
  static toc() {
    return markdown.parseToc(overview);
  }

  render() {
    return (
      <EcologyRecipe
        overview={overview}
        location={this.props.location}
        scope={{ ...Victory, React }}
      />
    );
  }
}

VictoryBrushContainer.propTypes = {
  location: React.PropTypes.object.isRequired
};

export default VictoryBrushContainer;

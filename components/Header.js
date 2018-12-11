import Link from "next/link";
import Router from "next/router";
import cssHeader from "../style/cssHeader";

class Header extends React.Component {
  state = {
    keyword: ""
  };
  render() {
    return (
      <>
        <div id="header">
          <div id="home">
            <div id="home-title">
              <Link href="/">
                <a>Build my Dreams with Codes</a>
              </Link>
            </div>
            <div id="home-title-sm">
              <Link href="/">
                <a>BDC</a>
              </Link>
            </div>
          </div>
          <div id="menu">
            <Link href="/about">
              <a id="menu-about">About</a>
            </Link>

            <div className="search-container">
              <span className="icon">
                <i className="fa fa-search" />
              </span>
              <input
                id="search"
                type="text"
                value={this.state.keyword}
                onChange={this._handleKeyword}
                onKeyPress={this._handlePress}
              />
            </div>

            <div id="menu-button" onClick={() => this.props._setShowing()}>
              <i className="fas fa-bars" />
            </div>
          </div>
        </div>
        <style jsx="true">{cssHeader}</style>
      </>
    );
  }
  _handleKeyword = event => {
    this.setState({
      keyword: event.target.value
    });
  };
  _handlePress = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      Router.push(`/search?keyword=${event.target.value}`);
    }
  };
}

export default Header;

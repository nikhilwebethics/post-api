import React from "react";
class Posts extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
        visible: 2,
        error: false
      };
  
      this.loadMore = this.loadMore.bind(this);
    }
  
    loadMore() {
      this.setState((prev) => {
        return {visible: prev.visible + 2};
      });
    }
  
    componentDidMount() {
      fetch("https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=10&page=1&_embed").then(
        res => res.json()
      ).then(res => {
        this.setState({
          items: res
        });
      }).catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
    }
  
    render() {
      return (
        <section>
         <h1 class="text-4xl ...">All Blogs</h1><br/>
          <div className="tiles" aria-live="polite">
            {this.state.items.slice(0, this.state.visible).map((item, index) => {
                return (
                  <div className="tile fade-in" key={item.id}>
                    <h1 className="text-2xl font-bold leading-7 text-blue-900 ">{item.title.rendered}</h1>
                    <p>{item.date}</p>
                    <p>Category : {item.categories}</p> 
                    <p>{item.uagb_excerpt}</p><br/>
                   
                  </div>
                );
              })}
            </div>
            {this.state.visible < this.state.items.length &&
               <button onClick={this.loadMore} type="button" className="load-more bg-red-700 p-2">Load more</button>
            }
          </section>
      );
    }
  }
  
 export default Posts;
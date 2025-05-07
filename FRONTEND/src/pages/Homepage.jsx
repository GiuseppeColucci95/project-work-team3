//component exports
export default function Homepage() {

  //logic

  //template
  return (
    <>
      <section id="jumbotron" className="d-flex align-items-center">
        <div className="container">

          <h2>Eat Your Way</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima similique dicta id dolorem magnam asperiores eius qui dolor, eos fuga praesentium impedit repellendus. Beatae sint officiis neque magni accusamus iure.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem sequi porro corporis, rerum placeat aliquam quam iure excepturi maiores nihil necessitatibus dolorem ducimus consectetur veniam molestias quaerat voluptate totam.
          </p>

        </div >
      </section>

      <section id="description" className="my-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src="https://picsum.photos/400/300" alt="description image" className="w-100" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa asperiores suscipit aliquid eveniet libero ratione quia, sed ducimus ullam harum fugiat omnis similique sapiente deserunt reiciendis placeat accusamus corporis voluptates nihil quaerat id voluptate nulla odit. Eum eos non vitae laboriosam enim officiis ratione magnam doloribus, saepe architecto reiciendis, velit delectus dolorem sit, aliquid maiores cumque tenetur a id. Nobis temporibus amet fuga ipsam magni quaerat voluptas dicta debitis illo, consectetur, odio, corporis placeat laborum unde accusamus nesciunt voluptate ea.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="best-sellers" className="py-5">
        <div className="container">
          <h3>BEST SELLERS</h3>
          <p>Here you can find our best sellers!</p>
        </div>
      </section>
    </>
  );
}
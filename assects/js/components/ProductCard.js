function ProductCard({ product }) {
    return `  <!-- Product Card 1 -->

                <div class="col-md-4 col-sm-6 col-lg-3 " id="p-${product.id}">

                    <div class="card product-card">

                        <span class="badge bg-danger product-id">

                            ID : P101

                        </span>

                        <img src="assects/image/image.jpg/${product.img_src}" class="card-img-top"
                        alt="${product.title}">

                        <div class="card-body">

                            <span class="category">
                            alt=${product.category}

                                Electronics

                            </span>

                            <h5>

                                Wireless Headphones

                            </h5>

                            <div class="rating">

                                ⭐⭐⭐⭐⭐

                                <small>(250 Reviews)</small>

                            </div>

                            <p>

                                <span class="mrp">
                                alt=${product.mrp}

                                    ₹3999

                                </span>

                                <span class="discount">
                                alt=${product.discount}

                                    40% OFF

                                </span>

                            </p>

                            <h4 class="price">

                                ₹2399

                            </h4>

                            <button class="btn btn-primary w-100 add-cart">

                                Add To Cart

                            </button>

                        </div>

                    </div>

                </div>
                <!-- Product Card 1 end -->`
}

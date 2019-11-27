function getAllItems() {
  return $.ajax({
    url: "api/products",
    method: "GET"
  });
}

function populateItemsOnPage(itemsJSONFromGetAllHTTP) {
  itemsJSONFromGetAllHTTP.forEach(function(item) {
    const id = item.id;
    const productName = item.product_name;
    const departmentName = item.department_name;
    const price = item.price;
    const stockQuantity = item.stock_quantity;
    $(".items-row").prepend(`
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"
        ><img
          class="card-img-top"
          src="http://placehold.it/700x400"
          alt=""
      /></a>
      <div class="card-body" data-id="${id}">
        <h4 class="card-title">
          <a href="#">${productName}</a>
        </h4>
        <h5>$${price}.00</h5>
        <p class="card-text">${departmentName}</p>
        <p data-id="${id}" class="card-text">Stock Quantity: ${stockQuantity}</p>
        <form>
        <label for="order">Buy quantity:</label>
        <input type="number" id="order" min="1" max="500" />
        <button class="btn btn-primary place-order">
          Place order
        </button>
        </form>
      </div>
      <div class="card-footer">
        <small class="text-muted"
          >&#9733; &#9733; &#9733; &#9733; &#9734;</small
        >
      </div>
    </div>
  </div>
    `);
    $(`.card-body[data-id='${id}']`).data("product", item);
  });
  //return "ready for next event";
}

function clickPlaceOrder() {
  $(document).on("click", ".place-order", function(event) {
    event.preventDefault();
    const orderQuantity = parseInt(
      $(this)
        .prev()
        .val()
    );
    const price = $(this)
      .parent()
      .parent()
      .data("product").price;
    const id = $(this)
      .parent()
      .prev()
      .attr("data-id");
    const productInfo = $(this)
      .parent()
      .parent()
      .data("product");
    $.ajax({
      url: `/api/products`,
      method: "PUT",
      data: {
        id: productInfo.id,
        orderQuantity: orderQuantity
      }
    }).then(function(response) {
      if (response == false) {
        $("#result-title").text("Order unsuccessful");
        $("#match-name").text("Insufficient quantity!");
        $("#results-modal").modal("toggle");
      } else {
        const orderCost = orderQuantity * price;
        $("#result-title").text("Order successful");
        $("#match-name").text(`Your order total is $${orderCost}.00`);
        $(`p[data-id=${id}]`).text(`Stock Quantity: ${response}`);
        $("#results-modal").modal("toggle");
      }
    });
  });
}

$(document).ready(function() {
  getAllItems().then(populateItemsOnPage);
  clickPlaceOrder();
});

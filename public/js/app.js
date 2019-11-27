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
    const createdAt = item.createdAt;
    const updatedAt = item.updatedAt;
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
        <p class="card-text">Stock Quantity: ${stockQuantity}</p>
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
    //.attr("data-test", `${stockQuantity}`);
    //console.log($("div[data-id='3']").attr("data-test"));
    //console.log($(`.card-body[data-id='${id}']`).data("product"));
  });
  //return "ready for next event";
}

// send along buying quat? nah, for the update one?? make an if statement with andserof this one, if quant ok then execute put request otherwise display insuff qunt

function clickPlaceOrder(populateFinished) {
  $(document).on("click", ".place-order", function(event) {
    // $(".place-order").on("click", function(event) {
    event.preventDefault();
    const productInfo = $(this)
      .parent()
      .parent()
      .data("product");
    $.ajax({
      url: `/api/products`,
      method: "PUT",
      data: {
        id: productInfo.id,
        orderQuantity: $(this)
          .prev()
          .val()
      }
    }).then(function(response) {
      if (response == false) {
        $("#result-title").text("Order unsuccessful");
        $("#match-name").text("Insufficient quantity!");
        $("#results-modal").modal("toggle");
      } else {
        $("#result-title").text("Order successful");
        $("#match-name").text(response);
        $("#results-modal").modal("toggle");
      }
    });
  });
}

/* function checkAndPlaceOrder(stockQuantity, orderQuantity) {
  if buying quant < sticj quant {place the order}

  else {dont}
} */

$(document).ready(function() {
  getAllItems().then(populateItemsOnPage);
  /*     .then(clickPlaceOrder)
    .then(checkandplace); */
  clickPlaceOrder();
});

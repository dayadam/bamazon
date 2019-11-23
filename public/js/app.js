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
    $(".shop-header").append(`
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"
        ><img
          class="card-img-top"
          src="http://placehold.it/700x400"
          alt=""
      /></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${productName}</a>
        </h4>
        <h5>$${price}.00</h5>
        <p class="card-text">
          ${departmentName}
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted"
          >&#9733; &#9733; &#9733; &#9733; &#9734;</small
        >
      </div>
    </div>
  </div>
    `);
  });
}

$(document).ready(function() {
  getAllItems().then(populateItemsOnPage);
});

// Storing items/ products in an array

 const items = [
    {
      wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
      name: 'BONDKA 19.5" Jumpstree ',
      title: "Backpack -Heather Gray",
      price: "38.99",
      prod_id_num: 101,
      img: "https://target.scene7.com/is/image/Target/adult-QUIVER-190726-1564164465952",
    },
  
    {
      wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
      name: "Bondka Sport 19' Blaze",
      title: "2.0 Backpack - Mint/Heather  Gray/Heather Blue",
      price: "34.99",
      prod_id_num: 102,
      img: "https://target.scene7.com/is/image/Target/GUEST_c880609d-ade4-4f58-9412-1d4ba3359a01",
    },
  
    {
      wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
      name: "United By Blue -",
      title: "Recyled Commuter 19' Backpack",
      price: "35.99",
      prod_id_num: 103,
      img: "https://target.scene7.com/is/image/Target/GUEST_4964968a-0bee-49b5-9d59-2c7545920b95",
    },
    {
      wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
      name: "19 ' Jartop Backpack-",
      title: "Embark",
      price: "39.99",
      prod_id_num: 104,
      img: "https://target.scene7.com/is/image/Target/GUEST_cb6cde1a-e81a-40af-9259-dd4b8f940036",
    },
    {
      wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
      name: "19' Jartop Backpack",
      title: "Periwinkle/Navy- Embark",
      price: "39.99",
      prod_id_num: 105,
      img: "https://target.scene7.com/is/image/Target/GUEST_696c02dc-99c4-4fc6-b67d-8a17e87fe685",
    },
    {
      wish: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0LjI1IDQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQuMjUgNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0yLjEyLDRDMi4xLDQsMi4wNywzLjk5LDIuMDUsMy45OEMxLjk4LDMuOTIsMC4zLDIuNjgsMC4wNCwxLjYyYy0wLjEtMC40My0wLjAxLTAuODgsMC4yNC0xLjJDMC41LDAuMTUsMC44MSwwLDEuMTYsMAoJCWMwLjUsMCwwLjgsMC4yNiwwLjk2LDAuNTFDMi4yOCwwLjI2LDIuNTksMCwzLjA4LDBjMC4zNSwwLDAuNjYsMC4xNSwwLjg4LDAuNDNjMC4yNSwwLjMyLDAuMzQsMC43NywwLjI0LDEuMgoJCUMzLjk1LDIuNjgsMi4yNywzLjkyLDIuMiwzLjk4QzIuMTgsMy45OSwyLjE1LDQsMi4xMiw0eiBNMS4xNiwwLjI1Yy0wLjM1LDAtMC41NywwLjE4LTAuNjgsMC4zM0MwLjI4LDAuODQsMC4yLDEuMjIsMC4yOSwxLjU3CgkJYzAuMjEsMC44NSwxLjUxLDEuOSwxLjg0LDIuMTVjMC4zMy0wLjI1LDEuNjMtMS4zMSwxLjg0LTIuMTVjMC4wOC0wLjM1LDAuMDEtMC43My0wLjE5LTAuOThDMy42NSwwLjQzLDMuNDMsMC4yNSwzLjA4LDAuMjUKCQljLTAuNjcsMC0wLjg0LDAuNTctMC44NCwwLjU4QzIuMjMsMC44OCwyLjE4LDAuOTIsMi4xMiwwLjkyaDBjLTAuMDYsMC0wLjEtMC4wNC0wLjEyLTAuMDlDMiwwLjgxLDEuODMsMC4yNSwxLjE2LDAuMjV6Ii8+CjwvZz4KPC9zdmc+Cg==",
      name: "SWISSGEAR 17.5' Scan Smart TSA Laptop ",
      title: "Backpack -Black",
      price: "60",
      prod_id_num: 106,
      img: "https://target.scene7.com/is/image/Target/GUEST_af5aaa7a-0f22-4ced-a811-3c762a5ec108",
    },
    
  ];
  // product cart me jaa rhe hai yaha se or inki counting bhi bad rhi hai 

//   // ab yaha par product ki sorting ki functionality hai 
if (localStorage.getItem("items") == null) {
  localStorage.setItem("items", JSON.stringify(items));
}

// Showing product Grids
function showItems(l) {
  let items = l;
  let items_div = document.getElementById("items");

  items_div.innerHTML = null;

  items.forEach(function (el) {
    let product_info = document.createElement("div");

    product_info.setAttribute("class", "product-info");

    let product_image = document.createElement("div");
    product_image.setAttribute("class", "Product-image");

    let img = document.createElement("img");
    img.src = el.img;
    img.setAttribute("class", "img-front");

    let product_particulars = document.createElement("div");
    product_particulars.setAttribute("class", "Product-particulars");



    let p_name = document.createElement("p");
    p_name.innerText = el.name;
    p_name.setAttribute("class", "Product_name");

    let span_title = document.createElement("span");
    span_title.innerText = el.title;

    let p_price = document.createElement("p");
    p_price.innerHTML = `$${el.price}`;
    
    
    let wish = document.createElement("img");
    wish.src = el.wish;
    
    wish.setAttribute("class","wishlist")
    let btn =document.createElement("button");
  
    btn.innerHTML ="Add to cart"
    btn.onclick=function(){
      addtoCart(el);
    }
    btn.setAttribute("class","cart-button")

    product_image.append(img);
    product_particulars.append(p_name, p_price,span_title,wish,btn);
    
    product_info.append(product_image,product_particulars);
items_div.append(product_info);




    img.addEventListener("click", function () {
      addtoVisited(el);
    });
    
    var i = 0;
    function swtichArrayColor() {
      var arr = ["#5e769b", "white"];
      if (i % 2 == 0) {
        wish.style.backgroundColor = arr[0];
      } else {
        wish.style.backgroundColor = arr[1];
      }
      i++;
    }
    wish.addEventListener("click", swtichArrayColor);
  
  });
}
showItems(JSON.parse(localStorage.getItem("items")));






// Feature and sorting seletive function

function myFunction() {
  var x = document.getElementById("mySelect").value;
  if (x == "Price, Low to High") {
    sortLH();
  } else if (x == "Price, High to Low") {
    sortHL();
  }
}


// Sprting Functions for Low to high and High to low
function sortLH() {
  let items = JSON.parse(localStorage.getItem("items"));

  items = items.sort(function (a, b) {
    return a.price - b.price;
  });
  showItems(items);
}

function sortHL() {
  let items = JSON.parse(localStorage.getItem("items"));

  items = items.sort(function (a, b) {
    return b.price - a.price;
  });
  showItems(items);
}






let carts = document.querySelectorAll('.cart-button');



for(let i =0;i<carts.length;i++) {
     carts[i].addEventListener('click',function(){
    // console.log("added to cart");
    cartNumber(items[i]);
   
     } );
    }
    function onLoadCartNumbers(){
      let productNumbers =localStorage.getItem('cartNumbers');
      if(productNumbers){
          document.querySelector('#cart span').textContent =productNumbers;
      }
  }
  
  
  function cartNumber(items)
  {
      
      let productNumbers = localStorage.getItem('cartNumbers')
      
      productNumbers= parseInt(productNumbers);
  
      if(productNumbers){
          localStorage.setItem('cartNumbers',productNumbers+1);
          document.querySelector('#cartlogo label').textContent =productNumbers+1;
      }
      else {
          localStorage.setItem('cartNumbers',1);
          document.querySelector('#cartlogo label').textContent =1;
  
      }
     
      setItem(items);
  }
  
  function setItem(items) {
      let cartItems = localStorage.getItem('productinCart');
      cartItems = JSON.parse(cartItems);
      // console.log(cartItems);
  if(cartItems != null) {
      if(cartItems[items.title] != undefined){
          
      }
      cartItems[items.title].incart += 1;
  }
  else {
     
      items.incart =1;
       cartItems ={
          [items.title]:items
      }
  }
//   // yaha tak product cart me jaa chuke hai
  
localStorage.setItem('ProductsinCart',JSON.stringify(cartItems));
       
 
      // console.log(productsincart)
  }
 
  onLoadCartNumbers();



  if(localStorage.getItem("cart")===null){
    localStorage.setItem("cart",JSON.stringify([]))
  }
  
  function addtoCart(p){
    let cart_data=JSON.parse(localStorage.getItem("cart"));
    cart_data.push(p)

    localStorage.setItem("cart",JSON.stringify(cart_data));
    
  }

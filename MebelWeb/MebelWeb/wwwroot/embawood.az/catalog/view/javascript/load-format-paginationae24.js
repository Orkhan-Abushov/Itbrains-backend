jQuery(document).ready(function($){
	const documentGrid = document.querySelector('.category__grid');
	const documentGridItems = documentGrid?.querySelectorAll('.category__grid-item');
	let options = {
		rootMargin: "0px",
		threshold: 0.5,
	};

	let observer = new IntersectionObserver((payload) => {
		if (payload[0].intersectionRatio === 1) {
			loadMoreProducts();
		}
	}, options);

	let target = document.querySelector(".category__page-observer-target");
	if (target) {
		observer.observe(target);
	}

	if (documentGridItems?.length < 4) {
		documentGrid.classList.add('flex-layout');
	}

    function loadMoreProducts () {
		var number = $("input[name='load-more-botton']").val();
		var category = $("input[name='more-botton-category']").val();
		var url = $("input[name='more-botton-urlcategory']").val();
		var path = $("input[name='more-botton-path']").val();
		var sort = $("input[name='more-botton-sort']").val();
		var filter = $("input[name='more-botton-filter']").val();
		var order = $("input[name='more-botton-order']").val();
		var step = $("input[name='more-botton-step']").val();
		var total = $("input[name='more-botton-totalproducts']").val();
		var display = localStorage.getItem('display');
		var cols = $('#column-right, #column-left').length;
		var variable = $("#number-products").text();
        var active = $("ul.pagination li.active span").text();
        var page = +step+1;

		if (documentGridItems.length >= 7) {
			$.ajax({
				type: "POST",
				url: url,
				data: {
					number : number,
					category : category,
					path : path,
					sort : sort,
					filter : filter,
					order : order,
					step : step,
					display : display,
					cols : cols
				},
				beforeSend: function() {
					$('.load-pagination').fadeIn();
				},
				success: function (response) {
					const domParser = new DOMParser();
					const htmlResponse = domParser
						.parseFromString(response, 'text/html')
						.querySelector('.category__grid');
					const categoryGridItems = htmlResponse.querySelectorAll(".category__grid-item");

					if (categoryGridItems.length !== 7) {
						observer.unobserve(target);

						if (categoryGridItems.length < 4) {
							htmlResponse.classList.add('flex-layout');
						}
					}

					$('.load-pagination').fadeOut();
					if(response != '' && response != null && response !== "undefined")
					{
						$('.category__grid-wrapper').append(htmlResponse);
						$('#more-step').attr('value', (+step +1));
						if(+total*1 > ((+number*1) * (+page*1)))
						{
							$('#number-products').html((+number*1 +page*1));
						}
						else
						{
							$('#number-products').html(total);
							$('#custom-pagination-button').css('display', 'none');
						}
						$("ul.pagination li.active").removeClass("active");
						$("ul.pagination li a:contains("+ page +")").parent().addClass("active");
						$("ul.pagination li a:contains("+ page +")").click(function(event){
						  event.preventDefault();
						});
					}
					else
					{
						alert('Empty');
						$('#custom-pagination-button').css('display', 'none');
					}
				},
				error: function () {
					alert("Error!");
				}
			});
		}
	};
});
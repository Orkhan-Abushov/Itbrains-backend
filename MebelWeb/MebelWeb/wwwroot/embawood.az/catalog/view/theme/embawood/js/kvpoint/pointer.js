// By Kvadrat.az

(function($) {
	$.fn.imgPoints = function(n) {
		if(undefined!= n){
			notes = n;
		}

		image = this;

		imgOffset = $(image).offset();

		$(notes).each(function(){
			appendnote(this);
		});

		$(image).hover(
			function(){
				$('.point').fadeIn(300);
			},
			function(){
				$('.point').hide();
			}
		);

		addnoteevents();

		$(window).resize(function () {
			$('.point').remove();

			imgOffset = $(image).offset();

			$(notes).each(function(){
				appendnote(this);
			});

			addnoteevents();
		});
	}

	function addnoteevents() {
		$('.point').hover(
			function(){
				$('.point').show();
				$(this).next('.img-point').show();
			},
			function(){
				$('.point').show();
				$(this).next('.img-point').hide();
			}
		);
		$('.img-point').hover(
			function(){
				$(this).show();
			},
			function(){
				$(this).hide();
			}
		);
	}

	function calculateDivisionFactor() {
		let divisionFactorTop = 1;
		let divisionFactorLeft = 1;
		let screenWidth = $(window).width();

		if (screenWidth > 1400) {
			divisionFactorTop = 1;
			divisionFactorLeft = 1;
		} else if (1320 <= screenWidth && screenWidth <= 1400) {
			divisionFactorTop = 1;
			divisionFactorLeft = 1.2;
		}else if (1140 <= screenWidth && screenWidth <= 1320) {
			divisionFactorTop = 1;
			divisionFactorLeft = 1.5;
		}else if (960 <= screenWidth && screenWidth <= 1140) {
			divisionFactorTop = 1.5;
			divisionFactorLeft = 1.5;
		}else if (720 <= screenWidth && screenWidth <= 960) {
			divisionFactorTop = 2.2;
			divisionFactorLeft = 2.1;
		}else if (540 <= screenWidth && screenWidth <= 720) {
			divisionFactorTop = 2.2;
			divisionFactorLeft = 3;
		}else if (460 <= screenWidth && screenWidth <= 540) {
			divisionFactorTop = 3.3;
			divisionFactorLeft = 3.1;
		}else if (400 <= screenWidth && screenWidth <= 460) {
			divisionFactorTop = 4.5;
			divisionFactorLeft = 4.2;
		}else if (360 <= screenWidth && screenWidth <= 400) {
			divisionFactorTop = 5;
			divisionFactorLeft = 5;
		}else{
			divisionFactorTop = 5.5;
			divisionFactorLeft = 5.5;
		}

		return {
			top: divisionFactorTop,
			left: divisionFactorLeft,
		};
	}
	function appendnote(note_data) {
		let Factor = calculateDivisionFactor();
		note_left =
			parseInt(imgOffset.left) + parseInt(note_data.posx - 4) / Factor.left;
		note_top =
			parseInt(imgOffset.top) + parseInt(note_data.posy - 4) / Factor.top;
		note_p_top = note_top + 20;
		if (note_data.url) {
			var goto =
				" onclick=\"window.location.href='" +
				note_data.url +
				'\';" style="cursor:pointer"';
		} else {
			var goto = "";
		}

		const dropdownPosition = ($(window).width() / 2) < note_left
			? { right:  ($(window).width() - note_left - 47) + 'px' }
			: { left: note_left + 'px' }

		note_area_div = $("<div class='point'"+goto+"></div>").css({ left: note_left + 'px', top: note_top + 'px' });

		note_text_div = $(`
			<div class="img-point product-add">
				<input type="hidden" name="parent_product_id" value="${note_data?.product_id?.product_id}" />
				<div class="img-point__note">
					<div class="img-point__wishlist">
						<button class="img-point__wishlist-btn add-wishlist" onclick="wishlist.add(${note_data?.product_id?.product_id});">
							<img src="catalog/view/theme/embawood/images/icons/like.svg" alt="add to wishlist" />
						</button>
					</div>
					<div class="img-point__img">
						<img src="image/${note_data?.product_id?.image}" />
					</div>
					<div class="img-point__price">
						${!!parseInt(note_data?.product_id?.price)
							? `<strong
									class="${!!parseInt(note_data?.product_id?.special) ? 'img-point__price-main' : 'img-point__price-special'}"
								>
									<span style="text-decoration: ${!!parseInt(note_data?.product_id?.special) ? 'line-through' : 'none'}">${note_data?.product_id?.price}</span>
									<span style="text-decoration: ${!!parseInt(note_data?.product_id?.special) ? 'line-through' : 'none'}">AZN</span>
								</strong>`
							: ''
						}
						${!!parseInt(note_data?.product_id?.special)
							? `<strong class="img-point__price-special">
								<span>${note_data?.product_id?.special}</span>
								<span>AZN</span>
							</strong>`
							: ''
						}
					</div>
					<h3 class="img-point__title">${note_data.product_id.name}</h3>
					<div class="img-point__add">
						<button class="img-point__add-btn add-to-cart-point" onclick="gtag('event', 'Click', {'event_category': 'cart', 'event_label':'Ярлык'});">
							<img src="catalog/view/theme/embawood/images/icons/basket_header.svg" />
							<span>Səbətə at</span>
						</button>
					</div>
				</div>
			</div> 
		`).css({
			...dropdownPosition,
			top: note_p_top + 'px'
		});

		$('body').append(note_area_div);
		$('body').append(note_text_div);
	}
})(jQuery);

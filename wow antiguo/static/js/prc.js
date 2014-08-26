
/**
 * Utility to record window scroll / dimensions.
 */
var Page = {
	object: null,
	loaded: false,
	dimensions: {
		width: 0,
		height: 0
	},
	scroll: {
		top: 0,
		width: 0
	},
	initialize: function() {
		if (Page.loaded)
			return;

		if (!Page.object)
			Page.object = $(window);

		Page.object
			.resize(Page.getDimensions)
			.scroll(Page.getScrollValues);

		Page.getScrollValues();
		Page.getDimensions();
		Page.loaded = true;
	},
	getScrollValues: function() {
		Page.scroll.top  = Page.object.scrollTop();
		Page.scroll.left = Page.object.scrollLeft();
	},
	getDimensions: function() {
		Page.dimensions.width  = Page.object.width();
		Page.dimensions.height = Page.object.height();
	}
};

/**
 * Dynamically create tooltips.
 *
 * @copyright   2012, Blizzard Entertainment, Inc
 * @class       Tooltip
 * @requires    Page
 * @example
 *
 *      onmouseover="Tooltip.show(this, 'This is the tooltip text!');"
 *
 */

var Tooltip = {
    wrapper: null,
    contentCell: null,
    cache: {},
    initialized: false,
	currentNode: null,
    initialize: function() {
		var tooltipDiv = $('<div/>').addClass('ui-tooltip').appendTo("body");

		Tooltip.contentCell = $('<div/>').addClass('tooltip-content').appendTo(tooltipDiv);

		// Assign to reference later
		Tooltip.wrapper = tooltipDiv;
		Tooltip.initialized = true;
	},
    show: function(node, content) {
		if (!Tooltip.wrapper)
			Tooltip.initialize();

		Tooltip.currentNode = node = $(node);

        node.mouseout(function() {
        	Tooltip.hide();
			Tooltip.currentNode = null;
        });

		Tooltip.position(node, content);
    },
	hide: function() {
		if (!Tooltip.wrapper)
			return;

		Tooltip.wrapper.hide();
		Tooltip.wrapper.unbind('mousemove.tooltip');
	},
    position: function(node, content) {
		if (!Tooltip.currentNode)
			return;

		if(typeof content == 'string')
	        Tooltip.contentCell.html(content);
		else
			Tooltip.contentCell.empty().append(content);

        var width = Tooltip.wrapper.outerWidth();
        var height = Tooltip.wrapper.outerHeight();
		var coords = Tooltip['_mouse'](width, height, node);

		if (coords) {
			Tooltip.wrapper
				.css("left", coords.x +"px")
				.css("top",  coords.y +"px")
				.show();
		}
    },
	_mouse: function(width, height, node) {
		node.bind('mousemove.tooltip', function(e) {
			Tooltip.wrapper
				.css("left", (e.pageX + 10) +"px")
				.css("top",  (e.pageY + 10) +"px")
				.show();
		});
	},
	_checkViewport: function(x, y, width, height, node) {
		var offset = node.offset();

		// Greater than x viewport
		if ((x + width) > Page.dimensions.width)
			x = (offset.left - width);

		// Less than x viewport
		else if (x < 0)
			x = 15;

		// Greater than y viewport
		if ((y + height) > (Page.scroll.top + Page.dimensions.height))
			y = y - ((y + height) - (Page.scroll.top + Page.dimensions.height));

		// Node on top of viewport scroll
		else if ((offset.top - 100) < Page.scroll.top)
			y = offset.top + node.outerHeight();

		// Less than y viewport scrolled
		else if (y < Page.scroll.top)
			y = Page.scroll.top + 15;

		// Less than y viewport
		else if (y < 0)
			y = 15;

		return {
			x: x,
			y: y
		};
	}

};

(function() {
	Page.initialize();
	var promoForm = new Form('#promo-form');
	var realms = new RealmSelector('#regionId', '#realmName', '#promo-form');
	var inputs = new InlineInputs('#promo-code input');
	var promoMenu = new PromoSelector('#promo-menu', 'div.npc-location');
})();

function Form(form) {
	form = $(form);
	var self = this,
		submitButton = form.find('button.submit-button[type=submit]'),
		cancelButton = form.find('a.cancel-button'),
		inputs = form.find('div.input-required input'),
		selects = form.find('div.input-required select');

	self.initialize = function() {
		if (!form.length || !submitButton.length)
			return false;

		self.disableSubmit();

		form.bind({
			'submit': function() {
				if ($('#step-1-button:visible').length === 1) {
					self.toggleSteps();
					return false;
				} else {
					self.disableSubmit();
				}
			}
		});

		inputs.bind({
			'keyup': function() {
				if (self.isFormComplete())
					self.enableSubmit();
				else
					self.disableSubmit();
			},
			'blur': function() {
				if (self.isFormComplete())
					self.enableSubmit();
				else
					self.disableSubmit();
			}
		});

		selects.bind({
			'change': function() {
				if (self.isFormComplete())
					self.enableSubmit();
				else
					self.disableSubmit();
			}
		});
	}

	self.isFormComplete = function() {
		var inputsLength = inputs.length,
			selectsLength = selects.length,
			i = 0;
		for (i; i < inputsLength; i++) {
			if (inputs[i].value === '')
				return false;
		}
		i = 0;
		for (i; i < selectsLength; i++) {
			if (selects[i].value === '')
				return false;
		}
		return true;
	}

	self.disableSubmit = function() {
		submitButton.attr('disabled', 'disabled').addClass('submit-disabled');
	}

	self.enableSubmit = function() {
		submitButton.removeAttr('disabled').removeClass('submit-disabled');
	}

	self.toggleSteps = function() {
		var regionLabel = null,
			realmLabel = null,
			introduction = null,
			submitButton = null;

		regionLabel = $('#regionId').find('option:selected').text();
		introduction = $('#step-2-introduction').html(),
		submitButton = $('#step-2-button').html()
		introduction = introduction.replace('REGION', regionLabel);
		submitButton = submitButton.replace('REGION', regionLabel);
		$('#step-2-introduction').html(introduction);
		$('#step-2-button').html(submitButton);

		realmLabel = $('#realmName').find('option:selected').text();
		introduction = $('#step-2-introduction').html(),
		submitButton = $('#step-2-button').html()
		introduction = introduction.replace('REALM', realmLabel);
		submitButton = submitButton.replace('REALM', realmLabel);
		$('#step-2-introduction').html(introduction);
		$('#step-2-button').html(submitButton);

		$('#step-1-title').toggle();
		$('#step-2-title').toggle();
		$('#step-1-introduction').toggle();
		$('#step-2-introduction').toggle();
		$('#step-1').toggle();
		$('#step-2').toggle();
		$('div.alert').toggle();
	}

	this.initialize();
}

function RealmSelector(regionSelect, realmSelect, form) {
	form = $(form);
	regionSelect = $(regionSelect);
	realmSelect = $(realmSelect);
	var self = this,
		submitButton = form.find('button.submit-button[type=submit]'),
		allRealms = realmSelect.html(),
		activeRealms = null;

	self.initialize = function() {
		if (!regionSelect.length || !realmSelect.length)
			return false;

		var regionTest = regionSelect.find('option:selected').text().replace('\u2026','');

		if (regionTest === '') {
			_freeze();
		} else {
			self.selectRealm(regionTest);
		}

		regionSelect.bind({
			'change': function(e) {
				var regionLabel = null;
				realmSelect.empty().html(allRealms);
				regionLabel = $(this).find('option:selected').text();
				self.selectRealm(regionLabel);
			}
		});

	}

	self.selectRealm = function(regionLabel) {
		activeRealms = $(realmSelect.find('optgroup[label^="' + regionLabel.split(' ')[0] + '"]').html());
		if (activeRealms.length > 0) {
			realmSelect.empty().html(activeRealms).removeAttr('disabled').removeClass('select-disabled');
		} else {
			_freeze();
		}
		self.disableSubmit();
	}

	function _freeze() {
		realmSelect.empty().html('<option value="" selected="selected">\u2026</option>').attr('disabled', 'disabled').addClass('select-disabled');
	}

	self.disableSubmit = function() {
		submitButton.attr('disabled', 'disabled').addClass('submit-disabled');
	}

	this.initialize();
}

function InlineInputs(inputs) {
	inputs = $(inputs);
	var self = this;

	self.initialize = function() {
		if (!inputs.length)
			return false;

		inputs.attr('autocomplete', 'off').bind({
			'keypress': function(e) {
				var val = this.value;
				if (e.which === 8) {
					if (val.length === 0) {
						var previous = $(this).prev('input.text-default');
						$(previous).focus();
					}
				}
			},
			'keydown': function(e) {
				// IE does not recognize backspace with keypress in a blank input box
				if (!jQuery.support.cssFloat) {
					var val = this.value;
					if (e.which === 8) {
						if (val.length === 0) {
							var previous = $(this).prev('input.text-default');
							$(previous).focus();
						}
					}
				}
			},
			'focus': function(e) {
				// need this to place the cursor at the end of the value in IE6
				this.value = this.value;
			},
			'keyup': function(e) {
				var keys = [8, 9, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 144, 145],
					string = keys.toString(),
					maxlength = parseInt($(this).attr('maxlength'), 10),
					val = this.value;

				if (string.indexOf(e.which) === -1 && val.length === maxlength) {
					$(this).next('input.text-default').focus();
				} else if (e.which === 9) {
					return true;
				}
			}
		});
	}

	this.initialize();
}

function PromoSelector(menu, locations) {
	var self = this,
		menu = $(menu),
		links = $(menu.find('a')),
		activeLink = $(menu.find('li.active-section a')[0]),
		locations = $(locations);

	self.initialize = function() {
		if (!menu.length || !locations.length)
			return false;

		menu.show();
		self.show(activeLink);

		links.bind({
			'click': function(e) {
				self.show($(e.target));
				e.target.blur();
				return false;
			}
		});

	}

	self.show = function(target) {
		locations.hide();
		$(links.parent('li')).removeClass('active-section');
		$(target.attr('href')).show();
		$(target.parent('li')).addClass('active-section');
	}

	this.initialize();
}

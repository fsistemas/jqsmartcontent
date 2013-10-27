(function( $ ) {
    $.fn.jqsmartcontent = function( options, callback, callback_params) {
        var defaults = {
			url: null
        };

        var settings = $.extend( {}, defaults, options );

		function call_callback(isRemote, xhr) {
			var data = callback_params;

			if (typeof callback == 'function') {
				if(!(callback_params instanceof Object)) {
					data = {};
				}

				data.isRemote = isRemote;
				data._xhr = xhr;

				callback(data);
			}
		}

		function destroy($el) {
			var child_container_id = $el.data("child_container_id") ? $el.data("child_container_id") : options["child_container_id"];
			$el.html("");
		}

		function hide($el) {
			var child_container_id = $el.data("child_container_id") ? $el.data("child_container_id") : options["child_container_id"];
			$("#" + child_container_id).hide();
		}

		function show($el) {
			var child_container_id = $el.data("child_container_id") ? $el.data("child_container_id") : options["child_container_id"];

			$("#" + child_container_id).show();			
		}

		function process_options($el) {
			var action = options["action"] ? options["action"] : options;

			if(action == "destroy") {
				destroy($el);
			} else if(action == "hide") {
				hide($el);
			} else if(action == "show") {
				show($el);
			}
		}

		function get_content($el) {
			var url = $el.data("url") ? $el.data("url") : options["url"];
			var child_container_id = $el.data("child_container_id") ? $el.data("child_container_id") : options["child_container_id"];

			if($("#" + child_container_id).length > 0) {
				process_options($el);

				call_callback(false,null);
			} else {
				var $parentContainer = null;
				var parentContainerId = "parent_" + child_container_id;

				//Already exists parent container created by this plugin
				if($("#" + parentContainerId).length > 0) {
					$parentContainer = $("#" + parentContainerId);
					//Set data-url and data-child_container_id to be sure that plugin is consistent

					$parentContainer.data("url",url);
					$parentContainer.data("child_container_id",child_container_id);
				} else if(!$el.data("url") &&  !$el.data("child_container_id")) {
					var htmlDivContainer = "<div " + "id=" + "parent_" + child_container_id + " data-url=" + url + " data-child_container_id=" + child_container_id + ">" + "</div>";
					$el.append(htmlDivContainer);
					$parentContainer = $("#" + parentContainerId);
				} else {
					$parentContainer = $el;
				}

				$parentContainer.load(url, function(response, status, xhr) {
					process_options($parentContainer);

					call_callback(true,xhr);
				});
			}
		}

        return this.each(function( i, el ) {
            var $el = $(el);

			get_content($el);
        });
    };
}( jQuery ));
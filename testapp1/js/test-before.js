function instantiate_notification_dialog() {
	$("#ajax_dialog").dialog({
	  resizable: false,
	  height:300,
	  width:600,
	  modal: true,
	  autoOpen: false,
	  buttons: {
		"Save": function() {
		  $( this ).dialog( "close" );
		},
		Cancel: function() {
		  $( this ).dialog( "close" );
		}
	  }
	});
}

function instantiate_notification_dialog2() {
	$("#ajax_dialog2").dialog({
	  resizable: false,
	  height:250,
	  width:400,
	  modal: true,
	  autoOpen: false,
	  buttons: {
		"Save": function() {
		  $( this ).dialog( "close" );
		},
		Cancel: function() {
		  $( this ).dialog( "close" );
		}
	  }
	});
}

function instantiate_notification_dialog3() {
	$("#ajax_dialog3").dialog({
	  resizable: false,
	  height:600,
	  width:400,
	  modal: true,
	  autoOpen: false,
	  buttons: {
		"OK": function() {
		  $( this ).dialog( "close" );
		},
		Cancel: function() {
		  $( this ).dialog( "close" );
		}
	  }
	});	
}

function instantiate_notification_dialog4() {
	$("#ajax_dialog4").dialog({
	  resizable: false,
	  height:600,
	  width:400,
	  modal: true,
	  autoOpen: false,
	  buttons: {
		"OK": function() {
		  $( this ).dialog( "close" );
		},
		Cancel: function() {
		  $( this ).dialog( "close" );
		}
	  }
	});	
}

function init_app() {
	instantiate_notification_dialog();
	instantiate_notification_dialog2();
	instantiate_notification_dialog3();
	instantiate_notification_dialog4();

	$("#btn_show_dialog").off("click").on("click",function() {
		$('input[id=check1]').attr('checked', true);
		$('input[id=check2]').attr('checked', false);

		$("#ajax_dialog").dialog("open");
	});

	$("#btn_show_dialog2").off("click").on("click",function() {
		$("#ajax_dialog2").dialog("open");
	});

	$("#btn_show_dialog3").off("click").on("click",function() {
		$("#ajax_dialog3").dialog("open");
	});

	$("#btn_show_dialog4").off("click").on("click",function() {
		$("#ajax_dialog4").dialog("open");
	});
}

function init_lazy_app() {
	
}
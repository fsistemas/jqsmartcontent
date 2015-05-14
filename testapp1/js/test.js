function on_load_notification_dialog_callback(data) {
	//First time instanciate dialog and open
	if(data && data.isRemote) {
		instantiate_notification_dialog();
	} else {
		//Nex time show dialog
		$("#ajax_dialog").dialog("open");
	}

	$('input[id=check1]').attr('checked', data.check1);
	$('input[id=check2]').attr('checked', data.check2);

	console.log("data.check1: " + data.check1);
	console.log("data.check2: " + data.check2);
}

function instantiate_notification_dialog() {
	$("#ajax_dialog").dialog({
	  resizable: false,
	  height:300,
	  width:600,
	  modal: true,
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

function on_load_notification_dialog_callback2(data) {
	//First time instanciate dialog and open
	if(data && data.isRemote) {
		instantiate_notification_dialog2();
	} else {
		//Nex time show dialog
		$("#ajax_dialog2").dialog("open");
	}
}

function instantiate_notification_dialog2() {
	$("#ajax_dialog2").dialog({
	  resizable: false,
	  height:250,
	  width:400,
	  modal: true,
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

function on_load_notification_dialog_callback3(data) {
	if(data && data.isRemote) {
		instantiate_notification_dialog3();
	} else {
		$("#ajax_dialog3").dialog("open");
	}
}

function instantiate_notification_dialog3() {
	$("#ajax_dialog3").dialog({
	  resizable: false,
	  height:600,
	  width:400,
	  modal: true,
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

function on_load_notification_dialog_callback4(data) {
	if(data && data.isRemote) {
		instantiate_notification_dialog4();
	} else {
		$("#ajax_dialog4").dialog("open");
	}
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
	$("#btn_show_dialog").off("click").on("click",function() {
		$("#div_my_ajax_dialog_container").jqsmartcontent("show",on_load_notification_dialog_callback, {"check1" : true , "check2" : false});
	});

	$("#btn_show_dialog2").off("click").on("click",function() {
		$("#div_my_ajax_dialog_container2").jqsmartcontent("show",on_load_notification_dialog_callback2);
	});

	$("#btn_show_dialog3").off("click").on("click",function() {
		$("body").jqsmartcontent({url: "remote_content3.html",child_container_id: "ajax_dialog3",action: "show"},on_load_notification_dialog_callback3);
	});

	$("#btn_show_dialog4").off("click").on("click",function() {
		//$("body").jqsmartcontent({action: "show"},on_load_notification_dialog_callback4);
		$("#div_my_ajax_dialog_container4").jqsmartcontent({action: "show"},on_load_notification_dialog_callback4);
	});
}

function init_lazy_app() {
	$(".jqsmartcontent-auto").jqsmartcontent({action: "show"});
}
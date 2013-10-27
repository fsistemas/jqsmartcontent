var TEST  = {
	on_load_notification_dialog_callback: function(data) {
		//First time instanciate dialog and open
		if(data && data.isRemote) {
			TEST.instantiate_notification_dialog();
		} else {
			//Nex time show dialog
			$("#ajax_dialog").dialog("open");
		}

		$('input[id=check1]').attr('checked', data.check1);
		$('input[id=check2]').attr('checked', data.check2);

		console.log("data.check1: " + data.check1);
		console.log("data.check2: " + data.check2);
	},
	instantiate_notification_dialog: function() {
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
	},
	on_load_notification_dialog_callback2: function(data) {
		//First time instanciate dialog and open
		if(data && data.isRemote) {
			TEST.instantiate_notification_dialog2();
		} else {
			//Nex time show dialog
			$("#ajax_dialog2").dialog("open");
		}
	},
	instantiate_notification_dialog2: function() {
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
	},
	on_load_notification_dialog_callback3: function(data) {
		debugger;

		if(data && data.isRemote) {
			TEST.instantiate_notification_dialog3();
		} else {
			$("#ajax_dialog3").dialog("open");
		}
	},
	instantiate_notification_dialog3: function() {
		$("#ajax_dialog3").dialog({
		  resizable: false,
		  height:250,
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
	},
	ready: function ready() {
		$("#btn_show_dialog").off("click").on("click",function() {
			$("#div_my_ajax_dialog_container").jqsmartcontent("show",TEST.on_load_notification_dialog_callback, {"check1" : true , "check2" : true});
		});

		$("#btn_show_dialog2").off("click").on("click",function() {
			$("#div_my_ajax_dialog_container2").jqsmartcontent("show",TEST.on_load_notification_dialog_callback2);
		});

		$("#btn_show_dialog3").off("click").on("click",function() {
			$("body").jqsmartcontent({url: "remote_content3.html",child_container_id: "ajax_dialog3",action: "show"},TEST.on_load_notification_dialog_callback3);
		});
	}
};
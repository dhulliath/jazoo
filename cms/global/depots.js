{
	$regionlist_hidden: true,
	regionlist: {
		british_columbia: {
			region: 'BC',
			full: 'British Columbia'
		},
		alberta: {
			region: 'AB',
			full: 'Alberta'
		},
		saskatchewan: {
			region: 'SK',
			full: 'Saskatchewan'
		},
		manitoba: {
			region: 'MB',
			full: 'Manitoba'
		},
		ontario: {
			region: 'ON',
			full: 'Ontario'
		}
	},
	$location_type_hidden: true,
	location_type: {
		warehouse: {
			$title_size: 12,
			$title_type: 'title',
			title: 'Warehouse',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '',
				city: '',
				region: '@@global.regionlist.alberta',
				postal_code: ''
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '',
				email: '',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: ''
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				$warehouse_hidden: true,
				warehouse: 'warehouse',
				show_in_waybill: true,
				show_in_contacts: true,
				show_in_locations: true
			}
		},
		depot: {
			$title_size: 12,
			$title_type: 'title',
			title: 'Dropoff',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '',
				city: '',
				region: '@@global.regionlist.alberta',
				postal_code: ''
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '',
				email: '',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: ''
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: '',
				$depot_hidden: true,
				depot: 'depot',
				show_in_waybill: false,
				show_in_contacts: false,
				show_in_locations: true
			}
		},
		office: {
			$title_size: 12,
			$title_type: 'title',
			title: 'Office',
			$address_size: 4,
			$address_noframe: true,
			address: {
				title: ''
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '',
				email: '',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: ''
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				$office_hidden: true,
				office: 'office',
				show_in_waybill: false,
				show_in_contacts: true,
				show_in_locations: false
			}
		}
	},
	$depots_size: 12,
	$depots_templatitator: '@@location_type',
	depots: [
		{
			$title_size: 12,
			$title_type: 'title',
			title: 'Warehouse',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: 'Bay 9 1435 40 Avenue NW',
				city: 'Calgary',
				region: '@@global.regionlist.alberta',
				postal_code: 'T2E 8N6'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '1-403-660-5504',
				email: 'calgary.operations@jazoocourier.com',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: 'calgary.operations @jazoocourier.com'
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				$warehouse_hidden: true,
				warehouse: 'warehouse',
				show_in_waybill: true,
				show_in_contacts: true,
				show_in_locations: true
			}
		},
		{
			$title_size: 12,
			$title_type: 'title',
			title: 'Warehouse',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '4525 101 Street NW',
				city: 'Edmonton',
				region: '@@global.regionlist.alberta',
				postal_code: 'T6E5C6'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '1-780-903-3628',
				email: 'edmonton.operations@jazoocourier.com',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: 'edmonton.operations @jazoocourier.com'
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				$warehouse_hidden: true,
				warehouse: 'warehouse',
				show_in_waybill: true,
				show_in_contacts: true,
				show_in_locations: true
			}
		},
		{
			$title_size: 12,
			$title_type: 'title',
			title: 'Dropoff',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '355 MacAlpine Crescent',
				city: 'Fort McMurray',
				region: '@@global.regionlist.alberta',
				postal_code: 'T9H 4Y4'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '1-587-645-6364',
				email: 'fortmac.operations@jazoocourier.com',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: 'fortmac.operations @jazoocourier.com'
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: 'Sentinel Storage',
				$depot_hidden: true,
				depot: 'depot',
				show_in_waybill: true,
				show_in_contacts: true,
				show_in_locations: true
			}
		},
		{
			$title_size: 12,
			$title_type: 'title',
			title: 'Dropoff',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '7701 Resources Road',
				city: 'Grande Prairie',
				region: '@@global.regionlist.alberta',
				postal_code: 'T8V 0N1'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '1-587-297-8406',
				email: 'gp.operations@jazoocourier.com',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: 'gp.operations @jazoocourier.com'
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: 'Maxim Self Storage',
				$depot_hidden: true,
				depot: 'depot',
				show_in_waybill: true,
				show_in_contacts: true,
				show_in_locations: true
			}
		},
		{
			$title_size: 12,
			$title_type: 'title',
			title: 'Dropoff',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: 'PO Box 12525',
				city: 'Lloydminster',
				region: '@@global.regionlist.alberta',
				postal_code: ''
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '1-780-903-3628',
				email: '',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: ''
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: 'Lloydminster Storage Ltd',
				$depot_hidden: true,
				depot: 'depot',
				show_in_waybill: false,
				show_in_contacts: false,
				show_in_locations: true
			}
		},
		{
			$title_size: 12,
			$title_type: 'title',
			title: 'Dropoff',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '6740 Johnstone Drive',
				city: 'Red Deer',
				region: '@@global.regionlist.alberta',
				postal_code: 'T4P 3Y2'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '1-403-660-5504',
				email: '',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: ''
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: 'U-Store-It',
				$depot_hidden: true,
				depot: 'depot',
				show_in_waybill: false,
				show_in_contacts: false,
				show_in_locations: true
			}
		},
		{
			$title_size: 12,
			$title_type: 'title',
			title: 'Office',
			$address_size: 4,
			$address_noframe: true,
			address: {
				title: 'Accounting Services'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '1-403-771-5031',
				email: 'accounting@jazoocourier.com',
				$abstracted_content_hidden: true,
				abstracted_content: {
					email_break: 'accounting @jazoocourier.com'
				}
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				$office_hidden: true,
				office: 'office',
				show_in_waybill: false,
				show_in_contacts: true,
				show_in_locations: false
			}
		}
	]
}
{
	$doc_type: 'textarea',
	doc: 'We are a courier company that was developed a specialty in the transportation of temperature sensitive goods & laboratory samples.\nOur company operates around the clock to provide our clients with the best possible courier services available.\n\nWe provide outstanding operations with multiple routes servicing locations on a daily basis. \nLocations Serviced Daily: \n* Calgary -- Red Deer -- Edmonton\n* Lloydminster -- Fort McMurray -- Whitecourt \n* Fox Creek -- Grande Prairie -- Dawson Creek\n* Fort St John\nAlso providing Hot Shot services to all Alberta locations and surrounding areas. \n\nJazoo also provides daily services to Oil and Gas site locations North of Fort McMurray. All our drivers and fleet trucks are equipped with the proper site access equipment and access badges to match.\nLocations Serviced Daily:  \n* Suncor Base Plant -- Suncor Fort Hills\n* Suncor Firebag -- Syncrude -- CNRL Albian\n* Husky Energy -- Kearl Imperial Oil \n* Civeo (Beaver River Lodge) \n* Clean Harbors (Oil Sands Lodge)\n\nWith drivers situated throughout the province, Jazoo has the ability to respond rapidly and reliably 24 hours a day, 7 days a week, 365 days a year. We have built up a great report with our extensive client list and our reputation is A+. Our clients know that we provide excellent & reliable courier services on a cost effective but competitive price platform. \n\nDuring the past 11 years in business Jazoo has delivered hundreds of thousands of packages. We strive for excellence in communication & service, and will continue to maintain the best possible courier services for each and every client. \n\nPlease contact your closest dispatch number for any questions regarding our services. \n\nWe appreciate your business, and look forward to hearing for you.\n\n\n\nThank you, Jazoo Express Courier Ltd.',
	$abstracted_content_hidden: true,
	abstracted_content: {
		marked_doc: '<p>We are a courier company that was developed a specialty in the transportation of temperature sensitive goods &amp; laboratory samples.\nOur company operates around the clock to provide our clients with the best possible courier services available.</p>\n<p>We provide outstanding operations with multiple routes servicing locations on a daily basis. \nLocations Serviced Daily: </p>\n<ul>\n<li>Calgary -- Red Deer -- Edmonton</li>\n<li>Lloydminster -- Fort McMurray -- Whitecourt </li>\n<li>Fox Creek -- Grande Prairie -- Dawson Creek</li>\n<li>Fort St John\nAlso providing Hot Shot services to all Alberta locations and surrounding areas. </li>\n</ul>\n<p>Jazoo also provides daily services to Oil and Gas site locations North of Fort McMurray. All our drivers and fleet trucks are equipped with the proper site access equipment and access badges to match.\nLocations Serviced Daily:  </p>\n<ul>\n<li>Suncor Base Plant -- Suncor Fort Hills</li>\n<li>Suncor Firebag -- Syncrude -- CNRL Albian</li>\n<li>Husky Energy -- Kearl Imperial Oil </li>\n<li>Civeo (Beaver River Lodge) </li>\n<li>Clean Harbors (Oil Sands Lodge)</li>\n</ul>\n<p>With drivers situated throughout the province, Jazoo has the ability to respond rapidly and reliably 24 hours a day, 7 days a week, 365 days a year. We have built up a great report with our extensive client list and our reputation is A+. Our clients know that we provide excellent &amp; reliable courier services on a cost effective but competitive price platform. </p>\n<p>During the past 11 years in business Jazoo has delivered hundreds of thousands of packages. We strive for excellence in communication &amp; service, and will continue to maintain the best possible courier services for each and every client. </p>\n<p>Please contact your closest dispatch number for any questions regarding our services. </p>\n<p>We appreciate your business, and look forward to hearing for you.</p>\n<p>Thank you, Jazoo Express Courier Ltd.</p>\n',
		contents: []
	},
	$regionlist_hidden: true,
	regionlist: {
		british_columbia: {
			region: 'BC'
		},
		alberta: {
			region: 'AB'
		},
		saskatchewan: {
			region: 'SK'
		}
	},
	$warehouse_type_hidden: true,
	warehouse_type: {
		warehouse: {
			$service_area_type: 'textarea',
			service_area: '',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '',
				city: '',
				region: '@@regionlist.alberta',
				postal_code: ''
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '',
				email: ''
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				$warehouse_hidden: true,
				warehouse: 'warehouse'
			}
		}
	},
	$depot_type_hidden: true,
	depot_type: {
		depot: {
			$service_area_type: 'textarea',
			service_area: '',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '',
				city: '',
				region: '@@regionlist.alberta',
				postal_code: ''
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '',
				email: ''
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: '',
				$depot_hidden: true,
				depot: 'depot'
			}
		}
	},
	$warehouses_size: 12,
	$warehouses_expander: true,
	$warehouses_templatitator: '@@warehouse_type',
	warehouses: [
		{
			$service_area_type: 'textarea',
			service_area: '',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: 'Bay 9, 1435 40 Avenue NW',
				city: 'Calgary',
				region: '@@regionlist.alberta',
				postal_code: 'T2E 8N6'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '(403) 660-5504',
				email: 'calgary.operations@jazoocourier.com'
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				$warehouse_hidden: true,
				warehouse: 'warehouse'
			}
		},
		{
			$service_area_type: 'textarea',
			service_area: 'North of Red Deer, south of Lac la Biche.',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '4525 101 Street NW',
				city: 'Edmonton',
				region: '@@regionlist.alberta',
				postal_code: 'T6E 5C6'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '(780) 903-3628',
				email: 'edmonton.operations@jazoocourier.com'
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				$warehouse_hidden: true,
				warehouse: 'warehouse'
			}
		}
	],
	$depots_size: 12,
	$depots_expander: true,
	$depots_templatitator: '@@depot_type',
	depots: [
		{
			$service_area_type: 'textarea',
			service_area: 'Grande Prairie, Fort St. John',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '7701 Resources Road',
				city: 'Grande Prairie',
				region: '@@regionlist.alberta',
				postal_code: 'T8V 0N1'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '(587) 297-8406',
				email: 'gp.operations@jazoocourier.com'
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: 'Maxim Self Storage',
				$depot_hidden: true,
				depot: 'depot'
			}
		},
		{
			$service_area_type: 'textarea',
			service_area: '',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '355 MacAlpine Crescent',
				city: 'Fort McMurray',
				region: '@@regionlist.alberta',
				postal_code: 'T9H 4Y4'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '(587) 645-6364',
				email: 'fortmac.operations@jazoocourier.com'
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: 'Sentinel Storage',
				$depot_hidden: true,
				depot: 'depot'
			}
		},
		{
			$service_area_type: 'textarea',
			service_area: '',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: '6740 Johnstone Drive',
				city: 'Red Deer',
				region: '@@regionlist.alberta',
				postal_code: 'T4P 3Y2'
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '(403) 660-5504',
				email: ''
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: 'U-Store-It',
				$depot_hidden: true,
				depot: 'depot'
			}
		},
		{
			$service_area_type: 'textarea',
			service_area: '',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: 'PO Box 12525',
				city: 'Lloydminster',
				region: '@@regionlist.alberta',
				postal_code: ''
			},
			$contact_size: 4,
			$contact_noframe: true,
			contact: {
				phone: '(780) 903-3628',
				email: ''
			},
			$details_size: 4,
			$details_noframe: true,
			details: {
				depot_host: 'Lloydminster Storage Ltd',
				$depot_hidden: true,
				depot: 'depot'
			}
		}
	],
	$contact_types_hidden: true,
	contact_types: {
		contact: {
			name: '',
			phone: '',
			email: ''
		}
	},
	$contacts_expander: true,
	$contacts_templatitator: '@@contact_types',
	contacts: [
		{
			name: 'Accounting',
			phone: '',
			email: 'accounting@jazoocourier.com'
		}
	]
}
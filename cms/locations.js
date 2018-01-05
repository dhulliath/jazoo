{
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
				email: ''
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
				email: ''
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
				email: ''
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
				email: ''
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
	]
}
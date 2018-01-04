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
	$depot_type_hidden: true,
	depot_type: {
		warehouse: 'Warehouse',
		dropoff: 'Storage Locker'
	},
	$location_type_hidden: true,
	location_type: {
		location: {
			name: '',
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
			details: {
				depot_type: '@@depot_type.warehouse'
			}
		}
	},
	$locations_size: 12,
	$locations_templatitator: '@@location_type',
	locations: [
		{
			name: 'Jazoo Edmonton',
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
			details: {
				depot_type: '@@depot_type.warehouse'
			}
		},
		{
			name: 'Jazoo Calgary',
			$service_area_type: 'textarea',
			service_area: '',
			$address_size: 4,
			$address_noframe: true,
			address: {
				address: 'Bay 9, 1435 40 Avenue NE',
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
			details: {
				depot_type: '@@depot_type.warehouse'
			}
		},
		{
			name: 'Maxim Self Storage',
			$service_area_type: 'textarea',
			service_area: '',
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
				phone: '',
				email: ''
			},
			$details_size: 4,
			details: {
				depot_type: '@@depot_type.dropoff'
			}
		}
	]
}
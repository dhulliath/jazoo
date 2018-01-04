{
	$location_type_hidden: true,
	location_type: {
		location: {
			name: '',
            $service_area_type: 'textarea',
			service_area: '',
			$address_size: 6,
            $address_noframe: true,
			address: {
				address: '',
				city: ''
			},
			$contact_size: 6,
            $contact_noframe: true,
			contact: {
				phone: '',
				email: ''
			}
		}
	},
	$locations_size: 12,
	$locations_templatitator: '@@location_type',
	locations: [
		{
			name: 'Edmonton',
			service_area: 'Edmonton Region, North of Red Deer, South of Lac La Biche',
			$address_size: 6,
			address: {
				address: '#102 4525 101 Street NW',
				city: 'Edmonton, AB'
			},
			$contact_size: 6,
			contact: {
				phone: '780-903-3628',
				email: ''
			}
		}
	]
}
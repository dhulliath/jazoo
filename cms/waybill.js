{
	description: {
		$doc_type: 'textarea',
		doc: 'Here is our company waybill, this gives the client the ability to fill in their own details of the shipment they plan on sending with Jazoo. \n\nPlease fill in the these sections of the waybill, this will provide Jazoo with the correct instructions for the delivery requested. \n\n* Contact Name\n* Contact Location\n* Billed To\n* Date \n* Number of Packages \n* Delivery From \n* Delivery To (City & Address Location)\n\nNote* The green parts on this waybill below will print out clearly. But when printing this out remember to scale to fit and narrow margins so it prints properly.',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '<p>Here is our company waybill, this gives the client the ability to fill in their own details of the shipment they plan on sending with Jazoo. </p>\n<p>Please fill in the these sections of the waybill, this will provide Jazoo with the correct instructions for the delivery requested. </p>\n<ul>\n<li>Contact Name</li>\n<li>Contact Location</li>\n<li>Billed To</li>\n<li>Date </li>\n<li>Number of Packages </li>\n<li>Delivery From </li>\n<li>Delivery To (City &amp; Address Location)</li>\n</ul>\n<p>Note* The green parts on this waybill below will print out clearly. But when printing this out remember to scale to fit and narrow margins so it prints properly.</p>\n',
			contents: []
		}
	},
	$dispatch_type_hidden: true,
	dispatch_type: {
		city: {
			name: '',
			phone: ''
		}
	},
	$dispatches_templatitator: '@@dispatch_type',
	$dispatches_expander: true,
	dispatches: [
		{
			name: 'Calgary',
			phone: '403-660-5504'
		},
		{
			name: 'Edmonton',
			phone: '780-903-3628'
		},
		{
			name: 'Fort McMurray',
			phone: '587-645-6364'
		},
		{
			name: 'Grande Prairie',
			phone: '587-297-8406'
		}
	]
}
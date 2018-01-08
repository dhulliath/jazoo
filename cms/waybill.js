{
	description: {
		$doc_type: 'textarea',
		doc: 'You can type in the details of your shipment into any green section, and print this page as a waybill!\n\nYou can also just print this page as it for a blank waybill.\n\nThe green parts will not print.\n\nFor best results, we recommend enabling Background Graphics, and Narrow margins in Microsoft Edge.',
		$abstracted_content_hidden: true,
		abstracted_content: {
			marked_doc: '<p>You can type in the details of your shipment into any green section, and print this page as a waybill!</p>\n<p>You can also just print this page as it for a blank waybill.</p>\n<p>The green parts will not print.</p>\n<p>For best results, we recommend enabling Background Graphics, and Narrow margins in Microsoft Edge.</p>\n',
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
{
	title: '',
	$publication_expander: true,
	publication: {
		$published_size: 2,
		published: false,
		$date_size: 4,
		$date_type: 'date',
		date: ''
	},
	$teaser_expander: true,
	teaser: {
		$image_size: 4,
		$image_type: 'image',
		image: '',
		$description_size: 8,
		$description_type: 'textarea',
		description: ''
	},
	$section_type_hidden: true,
	section_type: {
		text_section: {
			$doc_type: 'textarea',
			doc: '',
			$abstracted_content_hidden: true,
			abstracted_content: {
				marked_doc: '',
				contents: []
			}
		},
        image_section: {
            $image_type: 'image',
            image: ''
        }
	},
	$sections_templatitator: '@@section_type',
	$sections_size: 12,
	sections: []
}
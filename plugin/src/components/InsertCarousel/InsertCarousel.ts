export default (editor, url) => {
  editor.ui.registry.addIcon(
    'view-carousel',
    `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/></svg>`
  );
  editor.ui.registry.addButton('oc-carousel', {
    icon: 'view-carousel',
    tooltip: 'Insert Carousel',
    onAction () {
      editor.settings.ordercloud.open_carousel_editor()
        .then(html => {
          editor.insertContent(html);
        })
        .catch(e => {
          if (e !== 'user dismissed modal') {
            throw e;
          }
        });
    },
  });
};

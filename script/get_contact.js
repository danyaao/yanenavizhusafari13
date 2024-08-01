async function getContact() {
    if (location.protocol !== 'https:') {
        location.replace(`https:${location.href.substring(location.protocol.length)}`);
    }

    if (!navigator.contacts || !window.ContactsManager) {
        return null;
    }

    const propertiesAvailable = await navigator.contacts.getProperties();
    const contact = await navigator.contacts.select(propertiesAvailable, { multiple: false });

    const name = contact[0].name[0];

    const phone = contact[0].tel[0];

    let icon;

    if (contact[0].icon && contact[0].icon[0]) {
        icon = new Uint8Array(await contact[0].icon[0].arrayBuffer());
    } else {
        icon = null;
    }

    return [name, phone, icon];
}

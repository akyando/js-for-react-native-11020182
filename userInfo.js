

/**

 * @param {string[]} originalNames - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - The array of user profiles.
 */
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('Both arrays must be of the same length');
    }
    
    return originalNames.map((originalName, index) => ({
        id: index + 1,
        originalName,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
const originalNames = ["Abel", "Kweku", "Yando", "Erstina", "Grace"];
const modifiedNames = ["ABEL", "kweku", "YANDO", "erstina", "GRACE"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);

import filteredClips from '../filteredClips';

const clip1 = { name: 'clip 1', tag: 'tag 1' };
const clip2 = { name: 'new clip 2', tag: 'tag 2' };
const clip3 = { name: 'this is the third new clip', tag: '' };

describe('Videos / Selectors / utils / filteredClips', () => {
  let clips, nameFilter, tagFilter;
  let result, expectedClips;
  
  describe('when clips is an empty array', () => {
    beforeAll(() => {
      clips = [];
      nameFilter = 'nameFilter';
      tagFilter = 'tagFilter';
      result = filteredClips(clips, nameFilter, tagFilter);
      expectedClips = [];
    });

    it('should return an empty array of clips', () =>
      expect(result).toEqual(expectedClips));
  });

  describe('when clips both filters are empty strings', () => {
    beforeAll(() => {
      clips = [
        { name: 'clip 1', tag: '' },
        { name: 'clip 2', tag: 'tag' }
      ];
      nameFilter = '';
      tagFilter = '';
      result = filteredClips(clips, nameFilter, tagFilter);
      expectedClips = clips;
    });

    it('should return all clips', () =>
      expect(result).toEqual(expectedClips));
  });

  describe('when tagFilter is empty and nameFilter is not', () => {
    beforeAll(() => {
      clips = [ clip1, clip2, clip3 ]
      nameFilter = 'new clip';
      tagFilter = '';
      result = filteredClips(clips, nameFilter, tagFilter);
      expectedClips = [ clip2, clip3 ];
    });

    it('should return an array of clips that match the nameFilter', () =>
      expect(result).toEqual(expectedClips));
  });

  describe('when nameFilter is empty and tagFilter is not', () => {
    beforeAll(() => {
      clips = [ clip1, clip2, clip3 ]
      nameFilter = '';
      tagFilter = 'tag';
      result = filteredClips(clips, nameFilter, tagFilter);
      expectedClips = [ clip1, clip2 ];
    });

    it('should return an array of clips that match the nameFilter', () =>
      expect(result).toEqual(expectedClips));
  });

  describe('when both filters are not empty', () => {
    beforeAll(() => {
      clips = [ clip1, clip2, clip3 ]
      nameFilter = 'new clip';
      tagFilter = 'tag';
      result = filteredClips(clips, nameFilter, tagFilter);
      expectedClips = [ clip2 ];
    });

    it('should return an array of clips that match the nameFilter', () =>
      expect(result).toEqual(expectedClips));
  });

  describe('when no clips match the nameFilter', () => {
    beforeAll(() => {
      clips = [
        { name: 'clip 1', tag: '' },
        { name: 'clip 2', tag: 'tag' }
      ];
      nameFilter = 'no clips will match this name filter';
      tagFilter = '';
      result = filteredClips(clips, nameFilter, tagFilter);
      expectedClips = [];
    });

    it('should return an empty array of clips', () =>
      expect(result).toEqual(expectedClips));
  });

  describe('when no clips match the tagFilter', () => {
    beforeAll(() => {
      clips = [
        { name: 'clip 1', tag: '' },
        { name: 'clip 2', tag: 'tag' }
      ];
      nameFilter = '';
      tagFilter = 'no clips will match this tag filter';
      result = filteredClips(clips, nameFilter, tagFilter);
      expectedClips = [];
    });

    it('should return an empty array of clips', () =>
      expect(result).toEqual(expectedClips));
  });
});

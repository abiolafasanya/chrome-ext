const transcript = {
  jobName: 'transcription-1696373782311_kEJNrZ.mp4',
  accountId: '828144362142',
  results: {
    language_code: 'en-ZA',
    transcripts: [
      {
        transcript:
          'Oh, I did just record. And then you have. And he was expected.',
      },
    ],
    language_identification: [
      { score: '0.9917', code: 'en-ZA' },
      { score: '0.0037', code: 'en-GB' },
      { score: '0.0019', code: 'en-WL' },
      { score: '0.0014', code: 'en-AB' },
      { score: '0.0013', code: 'en-IE' },
    ],
    items: [
      {
        start_time: '0.67',
        end_time: '1.039',
        alternatives: [{ confidence: '0.678', content: 'Oh' }],
        type: 'pronunciation',
      },
      {
        alternatives: [{ confidence: '0.0', content: ',' }],
        type: 'punctuation',
      },
      {
        start_time: '1.429',
        end_time: '1.559',
        alternatives: [{ confidence: '0.652', content: 'I' }],
        type: 'pronunciation',
      },
      {
        start_time: '1.57',
        end_time: '1.669',
        alternatives: [{ confidence: '0.528', content: 'did' }],
        type: 'pronunciation',
      },
      {
        start_time: '1.679',
        end_time: '2.099',
        alternatives: [{ confidence: '0.996', content: 'just' }],
        type: 'pronunciation',
      },
      {
        start_time: '2.109',
        end_time: '2.799',
        alternatives: [{ confidence: '0.991', content: 'record' }],
        type: 'pronunciation',
      },
      {
        alternatives: [{ confidence: '0.0', content: '.' }],
        type: 'punctuation',
      },
      {
        start_time: '3.25',
        end_time: '3.42',
        alternatives: [{ confidence: '0.988', content: 'And' }],
        type: 'pronunciation',
      },
      {
        start_time: '3.43',
        end_time: '3.63',
        alternatives: [{ confidence: '0.964', content: 'then' }],
        type: 'pronunciation',
      },
      {
        start_time: '3.64',
        end_time: '3.67',
        alternatives: [{ confidence: '0.624', content: 'you' }],
        type: 'pronunciation',
      },
      {
        start_time: '3.68',
        end_time: '3.849',
        alternatives: [{ confidence: '0.663', content: 'have' }],
        type: 'pronunciation',
      },
      {
        alternatives: [{ confidence: '0.0', content: '.' }],
        type: 'punctuation',
      },
      {
        start_time: '7.32',
        end_time: '7.599',
        alternatives: [{ confidence: '0.996', content: 'And' }],
        type: 'pronunciation',
      },
      {
        start_time: '7.61',
        end_time: '7.75',
        alternatives: [{ confidence: '0.995', content: 'he' }],
        type: 'pronunciation',
      },
      {
        start_time: '7.76',
        end_time: '7.929',
        alternatives: [{ confidence: '0.995', content: 'was' }],
        type: 'pronunciation',
      },
      {
        start_time: '7.94',
        end_time: '8.39',
        alternatives: [{ confidence: '0.626', content: 'expected' }],
        type: 'pronunciation',
      },
      {
        alternatives: [{ confidence: '0.0', content: '.' }],
        type: 'punctuation',
      },
    ],
  },
  status: 'COMPLETED',
};

export type Transcript = typeof transcript;
export type TranscriptItem = typeof transcript.results.items[0];
